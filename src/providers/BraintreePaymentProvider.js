class BraintreePaymentProvider {
  name = 'Braintree';

  processPayment(order) {
    console.log('Processing payment with Braintree: ', order);
    return 'Payment successful with Braintree';
  }
}
