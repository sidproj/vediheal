import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import config from "../config.json";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { useRecoilState } from "recoil";
import { userAtom } from "../Recoil/user";
import StripeCheckoutForm from "./stripeCheckoutForm";

const stripePromise = loadStripe(config.STRIPE_PK);

const PayNow=(props)=>{
    
    const [clientSecret,setClientSecret] = useState(null);

    const [user,setUser] = useRecoilState(userAtom);
    const navigate = useNavigate();
    
    useEffect(()=>{
        
        if(!user){
            navigate("/login");
            return;
        }

        const url = config.SERVER_URL+"/payment/create-payment-intent";
        fetch(url,{
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                jwt:user?.jwt,
                amount:props.data.price
            })
        }).then((response)=> response.json())
        .then((data)=>{
            setClientSecret(data.clientSecret);
        });
    },[]);

    const appearance = {
        theme: 'stripe',
    };

    return (
        <div className="payment-container">
            <div className="PaymentApp">
                {clientSecret && (
                <Elements options={{clientSecret:clientSecret,appearance:appearance}} stripe={stripePromise}>
                    <StripeCheckoutForm setDisplayGateway={props.setDisplayGateway} setMessage={props.setMessage} data={props.data} notify={props.notify}/>
                </Elements>
                )}
            </div>
        </div>
    );
}

export default PayNow;