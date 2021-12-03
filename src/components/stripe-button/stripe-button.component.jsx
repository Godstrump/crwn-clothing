import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K2CmiD1ETCrXZc45BWJGLSHagTD7RCLnpQGtVUyEct5YhroHY59Eiim7AA4gh6GGgankr5qxxlljSIfhUFS93Uk00Sx5q1GNP';

  const onToken = token => {
    console.log(token)
      alert('Payement Successful')
  }


  return (
    <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    billingAddress
    shippingAddress
    image='https://sendeyo.com/up/d/f3eb2117da'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel= 'Pay Now'
    token={onToken}
    stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;