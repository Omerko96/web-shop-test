class StripePaymentProvider {
  name = 'Stripe';

  processPayment(order) {
    console.log('Processing payment with Stripe: ', order);
    return 'Payment successful with Stripe';
  }
}
