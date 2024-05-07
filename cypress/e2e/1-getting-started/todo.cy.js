/// <reference types="cypress" />
describe('example to-do app', () => {
  it("first test",() =>{
    cy.visit("https://the-internet.herokuapp.com/login");
    // cy.visit('',{
    //   auth: {
    //     username: '',
    //     password: '',
    //   },
    //failOnStatusCode: false
    // })
    cy.get('input#username').type('tomsmith');
    cy.get('input#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('h2').should("have.text"," Secure Area");
    cy.url().should('eq', 'https://the-internet.herokuapp.com/secure')
  })
})
