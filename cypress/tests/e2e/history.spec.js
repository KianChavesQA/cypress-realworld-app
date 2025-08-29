import userData from "../../fixtures/userData.json";
import loginPage from "../../pageObjects/loginPage";
import signUpPage from "../../pageObjects/signUpPage";
import homePage from "../../pageObjects/homePage";
import transactionPage from "../../pageObjects/transactionPage";
import personalPage from "../../pageObjects/personalPage";

// Executa antes de cada teste, acessando a URL principal da aplicação
beforeEach(() => {
  // Visita a página inicial da aplicação
  cy.visit("http://localhost:3000/");
});
describe("Visualizar histórico de transações sem sucesso", () => {
  it("Deve exibir uma mensagem de erro ao visualizar transações", () => {
    loginPage.fillUsername(userData.userSuccess.username);
    loginPage.fillPassword(userData.userSuccess.password);
    loginPage.clickLogin();
    personalPage.clickPersonalTab();
    personalPage.checkIfUserIsOnPersonalPage();
    personalPage.checkIfTransactionListIsVisible();
  });
});

describe("Tentar visualizar o histórico de transações de um usuário sem transações anteriores", () => {
  it.only("Deve exibir uma mensagem informando que não há transações", () => {
    loginPage.fillUsername(userData.userSuccess.username);
    loginPage.fillPassword(userData.userSuccess.password);
    loginPage.clickLogin();
    personalPage.clickPersonalTab();
    personalPage.checkAlertNoTransaction("No ");
  });
});
