import userData from "../fixtures/userData.json";

describe("Login com sucesso", () => {
  it.only("Deve fazer login com um usuário válido", () => {
    // Implemente os passos do caso de teste aqui
    cy.get('input[placeholder="Email"]').type(userData.userSuccess.username);
    cy.get('input[placeholder="Password"]').type(userData.userSuccess.password);
  });
});
describe("Login com falha", () => {
  it("Deve exibir uma mensagem de erro para credenciais inválidas", () => {
    // Implemente os passos do caso de teste aqui
  });
});
describe("Registro de usuário", () => {
  it("Deve registrar um novo usuário com sucesso", () => {
    // Implemente os passos do caso de teste aqui
  });
});
describbe("Registro com informaações incompletas", () => {
  it("Deve exibir mensagens de erro para campos obrigatórios não preenchidos", () => {
    // Implemente os passos do caso de teste aqui
  });
});
