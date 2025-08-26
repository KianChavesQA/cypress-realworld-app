import userData from "../../fixtures/userData.json";
import loginPage from "../../pageObjects/loginPage";
import signUpPage from "../../pageObjects/signUpPage";
import homePage from "../../pageObjects/homePage";
import transactionPage from "../../pageObjects/transactionPage";

// Importa a biblioteca Chance para gerar dados aleatórios
const Chance = require("chance");
// Cria uma instância de Chance
const chance = new Chance();

// Executa antes de cada teste, acessando a URL principal da aplicação
// Executa antes de cada teste, acessando a URL principal da aplicação
beforeEach(() => {
  // Visita a página inicial da aplicação
  cy.visit("http://localhost:3000/");
});

// Testa se é possível enviar dinheiro para um amigo quando o saldo é suficiente
it("Deve garantir que é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente", () => {
  // Preenche o campo de nome de usuário com dados válidos
  loginPage.fillUsername(userData.userSuccess.username);
  // Preenche o campo de senha com dados válidos
  loginPage.fillPassword(userData.userSuccess.password);
  // Clica no botão de login
  loginPage.clickLogin();
  // Verifica se o usuário está logado corretamente
  homePage.checkIfUserIsLoggedIn(userData.userSuccess.username);
  // Inicia uma nova transação
  homePage.newTransaction();
  // Verifica se está na página de transações
  transactionPage.checkTransactionPage();
  // Seleciona o primeiro contato da lista para enviar dinheiro
  transactionPage.selectFirstContact();
  // Preenche o valor da transferência (0 neste caso)
  transactionPage.fillAmount(0);
  // Preenche o campo de nota com uma frase aleatória
  transactionPage.fillNote(chance.sentence({ words: 3 }));
  // Clica no botão para realizar o pagamento
  transactionPage.clickPayButton();
  // Verifica se a mensagem de sucesso é exibida
  transactionPage.checkSuccessMessage();
});

it("Deve garantir que não é possível enviar dinheiro para um amigo quando o saldo da conta é insuficiente", () => {
  // Preenche o campo de nome de usuário com dados válidos
  loginPage.fillUsername(userData.userSuccess.username);
  // Preenche o campo de senha com dados válidos
  loginPage.fillPassword(userData.userSuccess.password);
  // Clica no botão de login
  loginPage.clickLogin();
  // Verifica se o usuário está logado corretamente
  homePage.checkIfUserIsLoggedIn(userData.userSuccess.username);
  // Inicia uma nova transação
  homePage.newTransaction();
  // Verifica se está na página de transações
  transactionPage.checkTransactionPage();
  // Seleciona o primeiro contato da lista para enviar dinheiro
  transactionPage.selectFirstContact();
  // Preenche o valor da transferência (1000 neste caso)
  transactionPage.fillAmount(1000);
  // Preenche o campo de nota com uma frase aleatória
  transactionPage.fillNote(chance.sentence({ words: 3 }));
  // Clica no botão para realizar o pagamento
  transactionPage.clickPayButton();
  // Verifica se a mensagem de falha é exibida
  transactionPage.checkFailMessage();
});
