class PaymentProcessorModel {
  constructor(service) {
    this.service = service;
  }

  addPaymentProvider(provider) {
    this.service.addPaymentProvider(provider);
  }

  removePaymentProvider(providerName) {
    this.service.removePaymentProvider(providerName);
  }

  processPayment(order, selectedProvider) {
    try {
      return this.service.processPayment(order, selectedProvider);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
