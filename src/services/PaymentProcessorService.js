class PaymentProcessorService {
  constructor() {
    this.paymentProviders = [];
  }

  addPaymentProvider(provider) {
    this.paymentProviders.push(provider);
  }

  removePaymentProvider(providerName) {
    this.paymentProviders = this.paymentProviders.filter(provider => provider.name !== providerName);
  }

  processPayment(order, selectedProvider) {
    const paymentProvider = this.paymentProviders.find(provider => provider.name === selectedProvider);

    if (paymentProvider) {
      return paymentProvider.processPayment(order);
    } else {
      throw new Error('Selected payment provider not found.');
    }
  }
}
