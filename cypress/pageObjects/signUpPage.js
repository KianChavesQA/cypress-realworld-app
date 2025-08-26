import { check } from "express-validator";

class SignupPage {
  selectorsList() {
    const selectors = {
      firstNameField: '[name="firstName"]',
      lastNameField: '[name="lastName"]',
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      confirmPasswordField: '[name="confirmPassword"]',
      loginButton: '[type="submit"]',
      alertMessage: '[role="alert"]',
      firstNameHelper: '[data-test="signup-first-name"]',
    };

    return selectors;
  }

  checkSignupUrl() {
    cy.url().should("include", "/signup");
  }
  createAccount(firstName, lastName, username, password, confirmPassword) {
    cy.get(this.selectorsList().firstNameField).type(firstName);
    cy.get(this.selectorsList().lastNameField).type(lastName);
    cy.get(this.selectorsList().usernameField).type(username);
    cy.get(this.selectorsList().passwordField).type(password);
    cy.get(this.selectorsList().confirmPasswordField).type(confirmPassword);
  }
  submit() {
    cy.get(this.selectorsList().loginButton).click();
  }

  checkAlertMessage(message) {
    cy.get(this.selectorsList().firstNameHelper).should("be.visible");
  }
  checkSignupSuccess() {
    cy.get(this.selectorsList().alertMessage)
      .should("be.visible")
      .and("contain", "You have successfully registered");
  }
}
export default new SignupPage();
