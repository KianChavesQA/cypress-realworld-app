class TransactionPage {
  selectorsList() {
    const selectors = {
      userNameNavi: '[data-test="sidenav-username"]',
      newTransactionButton: '[data-test="nav-top-new-transaction"]',
      firstContact: '[data-test="user-list-item-uBmeaz5pX"]',
      amountField: "[name='amount']",
      noteField: "[placeholder='Add a note']",
      payButton: "[data-test='transaction-create-submit-payment']",
      requestButton: "[data-test='transaction-create-submit-request']",
      successMessage: '[data-testid="SuccessOutlinedIcon"]',
      failMessage: '[data-testid="ErrorOutlineOutlinedIcon"]',
    };
    return selectors;
  }

  checkTransactionPage() {
    cy.url().should("include", "/transaction");
  }
  selectFirstContact() {
    cy.get(this.selectorsList().firstContact).click();
  }
  fillAmount(amount) {
    cy.get(this.selectorsList().amountField).type(amount);
  }
  fillNote(note) {
    cy.get(this.selectorsList().noteField).type(note);
  }
  clickPayButton() {
    cy.get(this.selectorsList().payButton).click();
  }
  checkSuccessMessage() {
    cy.get(this.selectorsList().successMessage).should("be.visible");
  }
  checkFailMessage() {
    cy.get(this.selectorsList().failMessage).should("be.visible");
  }
}
export default new TransactionPage();
