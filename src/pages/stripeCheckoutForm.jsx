import { 
    PaymentElement,
    LinkAuthenticationElement,
    useStripe,
    useElements 
} from "@stripe/react-stripe-js";
import { set } from "mongoose";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "../stripe.css";
import config from "../config.json";

const StripeCheckoutForm = (props)=>{

    const location = useLocation();
    const navigate = useNavigate();

    const stripe = useStripe();
    const elements = useElements();

    const [message,setMessage] = useState(null);
    const [isLoading,setIsLoading] = useState(false);

    // goto home page if does not have valid data which means use did not come to this page
    // thorugh predefined steps and has directly entered url for this page.
    useEffect(()=>{
        if(!location.state) navigate("/");
    },[]);

    useEffect(()=>{
        if(!stripe) return;

        const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");

        if (!clientSecret) return;

        stripe.retrievePaymentIntent(clientSecret).then( async ({ paymentIntent }) => {
            switch (paymentIntent.status) {
                case "succeeded":
                console.log(paymentIntent.id);
                setMessage("Payment succeeded!");
                break;
                case "processing":
                setMessage("Your payment is processing.");
                break;
                case "requires_payment_method":
                setMessage("Your payment was not successful, please try again.");
                break;
                default:
                setMessage("Something went wrong.");
                break;
            }
        });
    },[stripe]);

    const handleSubmit = async (e)=>{
        e.preventDefault();

        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        if(!stripe || !elements) return;

        setIsLoading(true);

        stripe.confirmPayment({
            elements,
            confirmParams: {
              // Make sure to change this to your payment completion page
            },redirect:"if_required",
          }).then((result)=>{
            if(result.error){
                setMessage("Your payment was not successful, please try again.");
            }else{
                // fetch call to backend to make booking
                handleAppointmentBooking();
                props.setDisplayGateway(false);
                props.setMessage("Appointment booked successfully!");
            }
        })

        setIsLoading(false);

    }

    const handleAppointmentBooking = async ()=>{
        const url = config.SERVER_URL+"/appointment/set";
        const options = {
        method: "POST",
        body: JSON.stringify(props.data),
        headers: {
            "Content-Type": "application/json",
        },
        };
        const res = await fetch(url, options);
        const body = await res.json();
    }

    const paymentElementOptions = {
        layout: "tabs"
    }

    return(
        <form className="payment-form" id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement
                id="link-authentication-element"
                // onChange={(e) => setEmail(e.target.value)}
            />
            <PaymentElement id="payment-element" options={paymentElementOptions} />
            <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
            </button>
            {/* Show any error or success messages */}
            {message && <div id="payment-message">{message}</div>}
        </form>
    )
}

export default StripeCheckoutForm;