class PersonalPage {
  selectorsList() {
    const selectors = {
      personalTab: "[data-test='nav-personal-tab']",
      transactionList: "[data-test='transaction-list']",
      alertNoTransaction: "[data-test='empty-list-header']",
    };
    return selectors;
  }

  checkIfUserIsOnPersonalPage() {
    cy.url().should("include", "/personal");
  }
  clickPersonalTab() {
    cy.get(this.selectorsList().personalTab).click();
  }
  checkIfTransactionListIsVisible() {
    cy.get(this.selectorsList().transactionList).should("be.visible");
  }
  checkAlertNoTransaction(message) {
    cy.get(this.selectorsList().transactionList).should("not.exist").then(() => {
      cy.get(this.selectorsList().alertNoTransaction)
        .should("be.visible")
        .and("contain", message);
    });
  }
}
export default new PersonalPage();
