import userData from "../../fixtures/userData.json";
import loginPage from "../../pageObjects/loginPage";
import signUpPage from "../../pageObjects/signUpPage";
import homePage from "../../pageObjects/homePage";
import { sign } from "crypto";

// Importa a biblioteca Chance para gerar dados aleatórios
const Chance = require("chance");
// Cria uma instância de Chance
const chance = new Chance();

// Executa antes de cada teste, acessando a URL principal da aplicação
beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

// Inicia o bloco de testes para login com sucesso
describe("Login com sucesso", () => {
  // Testa se é possível fazer login com um usuário válido
  it("Deve fazer login com um usuário válido", () => {
    // Verifica se está na URL de login
    loginPage.checkLoginUrl();
    // Preenche o campo de nome de usuário
    loginPage.fillUsername(userData.userSuccess.username);
    // Preenche o campo de senha
    loginPage.fillPassword(userData.userSuccess.password);
    // Clica no botão de login
    loginPage.clickLogin();
    // Verifica se o usuário está logado na página inicial
    homePage.checkIfUserIsLoggedIn(userData.userSuccess.username);
  });
});

// Inicia o bloco de testes para login com falha
describe("Login com falha", () => {
  // Testa se aparece mensagem de erro para credenciais inválidas
  it("Deve exibir uma mensagem de erro para credenciais inválidas", () => {
    // Verifica se está na URL de login
    loginPage.checkLoginUrl();
    // Preenche o campo de nome de usuário com dados inválidos
    loginPage.fillUsername(userData.userFail.username);
    // Preenche o campo de senha com dados inválidos
    loginPage.fillPassword(userData.userFail.password);
    // Clica no botão de login
    loginPage.clickLogin();
    // Verifica se aparece a mensagem de alerta de erro
    loginPage.checkAlertMessage("Username or password is invalid");
  });
});

// Inicia o bloco de testes para registro de usuário
describe("Registro de novo usuário", () => {
  // Testa se é possível registrar um novo usuário com sucesso
  it("Deve registrar um novo usuário com sucesso", () => {
    // Clica no botão de cadastro
    loginPage.clickSignup();
    // Verifica se está na URL de cadastro
    signUpPage.checkSignupUrl();
    // Cria uma conta com dados aleatórios e senha do usuário de sucesso
    signUpPage.createAccount(
      chance.first(),
      chance.last(),
      chance.email(),
      userData.userSuccess.password,
      userData.userSuccess.password
    );
    signUpPage.submit();
    // Verifica se aparece a mensagem de sucesso
    signUpPage.checkSignupSuccess();
    // Verifica se está de volta na URL de login
    cy.wait(2000); // espera 2 segundos
    loginPage.checkLoginUrl();
  });
});

// Inicia o bloco de testes para registro com informações incompletas
describe("Registro com informaações incompletas", () => {
  // Testa se aparecem mensagens de erro para campos obrigatórios não preenchidos
  it("Deve exibir mensagens de erro para campos obrigatórios não preenchidos", () => {
    // Clica no botão de cadastro
    loginPage.clickSignup();
    // Verifica se está na URL de cadastro
    signUpPage.checkSignupUrl();
    // Clica no botão de registrar sem preencher os campos
    signUpPage.submit();
    // Verifica se aparece a mensagem de alerta de campo obrigatório
    signUpPage.checkAlertMessage("First name is required");
  });
});

// Inicia o bloco de testes para registro do usuário sucesso
describe("Registro do usuário sucesso", () => {
  it.skip("Deve registrar o usuário Sucesso", () => {
    loginPage.clickSignup();
    signUpPage.checkSignupUrl();
    signUpPage.createAccount(
      Joe,
      Doe,
      userData .userSuccess.username,
      userData.userSuccess.password,
      userData.userSuccess.password
    );
    signUpPage.submit();
  });
});
