import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentGateway from "./PaymentGateway";

const PUBLIC_KEY =
  "pk_test_51MtHy7KWIvRUd9MoT3RMUr4gF8BhaLtBoDvprn2bqluInjgYpHs55TEpm7RmLiYxBHQshKMWIje6D44RZFm62AQZ00gBiwjqYV";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const PaymentGatewayContainer = (props) => {
  const handleModal = (showModal, status) => {
    props.clickHandler(showModal, status);
  };
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentGateway clickHandler={handleModal} payType={props.payType} />
    </Elements>
  );
};

export default PaymentGatewayContainer;
