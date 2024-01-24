class PayPalPaymentProvider {
  name = 'PayPal';

  processPayment(order) {
    console.log('Processing payment with PayPal: ', order);
    return 'Payment successful with PayPal';
  }
}
