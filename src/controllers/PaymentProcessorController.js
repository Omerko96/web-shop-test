class PaymentProcessorController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addPaymentProvider(provider) {
    this.model.addPaymentProvider(provider);
    this.view.updatePaymentProviders();
  }

  removePaymentProvider(providerName) {
    this.model.removePaymentProvider(providerName);
    this.view.updatePaymentProviders();
  }

  processPayment(order, selectedProvider) {
    try {
      const result = this.model.processPayment(order, selectedProvider);
      this.view.displayPaymentResult(result);
    } catch (error) {
      this.view.displayError(error.message);
    }
  }
}
