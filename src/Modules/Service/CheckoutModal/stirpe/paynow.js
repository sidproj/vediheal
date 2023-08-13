import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe("pk_test_51NNAjOSAZExnf8Z4DwdyPJoZufB7xqrMrMyoYgsToFogi2jClVFE9fVIbanpmfLtxlQGgxM2R4ssJa2cncZJ95UA00MAK8UwHe");


const PayNow = (props)=>{

    
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(()=>{
    console.log(10);
    const url = "http://localhost:5000/payment/create-payment-intent";
    fetch(url,{
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({jwt:props.userJWT,service:{price:props.price}}),
    }).then((response)=> response.json())
    .then((data)=>{
        console.log(data);
        setClientSecret(data.clientSecret);
    });
  },[]);

  const appearance = {
    theme: 'stripe',
  };
  const style={

  };

  return (
    <div className="payment-container">
    <div className="PaymentApp">
      {clientSecret && (
        <Elements options={{clientSecret:clientSecret,appearance:appearance}} stripe={stripePromise}>
          <CheckoutForm setDisplayGateway={props.setDisplayGateway} data={props.data}/>
        </Elements>
      )}
    </div>
    </div>
  );
}

export default PayNow;