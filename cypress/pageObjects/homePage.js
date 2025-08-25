class HomePage {
  selectorsList() {
    const selectors = {
      userNameNavi: '[data-test="sidenav-username"]',
    };
    return selectors;
  }

  checkIfUserIsLoggedIn(username) {
    cy.get(this.selectorsList().userNameNavi).should('contain.text', username);
  }
}
export default new HomePage();