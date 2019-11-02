import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_ab34AtpVf0b8FGm2ZtGz3heJ00xUZoOZlb';

    return (
        <StripeCheckout 
            lable='Pay Now'
            name='React-Ecommerce Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.sng'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token='onToken'
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;