import { sign } from "crypto";
import { check } from "express-validator";

class LoginPage {
  selectorsList() {
    const selectors = {
      usernameField: '[name="username"]',
      passwordField: '[name="password"]',
      loginButton: '[type="submit"]',
      alertMessage: '[role="alert"]',
      signupLink: '[data-test="signup"]',
    };

    return selectors;
  }

  checkLoginUrl() {
    cy.url().should("include", "/signin");
  }

  fillUsername(username) {
    cy.get(this.selectorsList().usernameField).type(username);
  }
  fillPassword(password) {
    cy.get(this.selectorsList().passwordField).type(password);
  }
  clickLogin() {
    cy.get(this.selectorsList().loginButton).click();
  }
  checkAlertMessage(message) {
    cy.get(this.selectorsList().alertMessage).should("be.visible").and("contain", message);
  }
  clickSignup() {
    cy.get(this.selectorsList().signupLink).click();
  }
}
export default new LoginPage();
