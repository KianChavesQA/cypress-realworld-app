class HomePage {
  selectorsList() {
    const selectors = {
      userNameNavi: '[data-test="sidenav-username"]',
      newTransactionButton: '[data-test="nav-top-new-transaction"]',
      firstContact: '[data-test="user-list-item-uBmeaz5pX"]',
      amountField: "[name='amount']",
      noteField: "[placeholder='Add a note']",
      payButton: "[data-test='transaction-create-submit-payment']",
      requestButton: "[data-test='transaction-create-submit-request']",
    };
    return selectors;
  }

  checkIfUserIsLoggedIn(username) {
    cy.get(this.selectorsList().userNameNavi).should("contain.text", username);
  }
  newTransaction() {
    cy.get(this.selectorsList().newTransactionButton).click();
  }
}
export default new HomePage();
