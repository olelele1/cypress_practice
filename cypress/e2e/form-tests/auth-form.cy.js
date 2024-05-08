/// <reference types="cypress" />
describe("Form tests", () => {
  it("first test", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("input#username").type("tomsmith");
    cy.get("input#password").type("WrongPassword");
    cy.get('button[type="submit"]').click();
    cy.get("div#flash.error").should(
      "have.text",
      "\n            Your password is invalid!\n            ×\n          "
    );
  });
  it("second test test", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("input#username").type("wrong login");
    cy.get("input#password").type("SuperSecretPassword!");
    cy.get('button[type="submit"]').click();
    cy.get("div#flash.error").should(
      "have.text",
      "\n            Your username is invalid!\n            ×\n          "
    );
  });
  it("third test", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
      failOnStatusCode: false,
    });
    cy.get('[appscrollto="aboutSection"] ~ button').click();
    cy.get('footer').scrollIntoView();
  });
});
