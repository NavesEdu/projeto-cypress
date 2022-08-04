
context("ServeRest", () => {
  
  it('Fazer login na aplicação sem sucesso', () => {
    cy.visit("https://front.serverest.dev/login")
    cy.get("input#email.form-control").type("eduardo.naves@ges.inatel.br")
    cy.get("input#password.form-control")
      .type("123456") 
    cy.get("button.btn.btn-primary").click()
    cy.contains("Email e/ou senha inválidos").should("be.visible")
});

  it('Fazer login na aplicação com sucesso', () => {
    cy.visit("https://front.serverest.dev/login")
    cy.get("input#email.form-control").type("eduardo.naves@ges.inatel.br")
    cy.get("input#password.form-control")
      .type("123456789")      
    cy.get("button.btn.btn-primary").click()
});
});