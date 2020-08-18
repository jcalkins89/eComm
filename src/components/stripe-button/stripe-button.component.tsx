// @ts-nocheck
import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({
  price,
  style,
}: {
  price: number;
  style: React.CSSProperties;
}) => {
  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = (token: any) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="eComm"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/x39N4L4/price-tag.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      style={style}
    />
  );
};

export default StripeCheckoutButton;
