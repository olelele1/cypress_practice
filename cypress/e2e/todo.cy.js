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
  it.skip("children", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get("div.contacts_socials").children(
      'a[href="https://www.facebook.com/Hillel.IT.School"]'
    );
  });
  it.skip("within", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.contains("Sign In").click();
    cy.get("div.modal-content").within(() => {
      cy.get("button");
    });
  });
  it.skip("severals", () => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      },
    });
    cy.get("span.socials_icon");
    cy.get("span.socials_icon").first();
    cy.get("span.socials_icon").last();
    cy.get("span.socials_icon").eq(0);
    cy.get(".socials_link").filter(
      'a[href="https://www.facebook.com/Hillel.IT.School"]'
    );
  });
  it("invoke", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get("input#username").type("tomsmith");
    cy.get("input#password").type("WrongPassword");
    cy.get('button[type="submit"]').click();
    cy.get('#flash').invoke("text").then((text => {
        cy.log(text);
    }));
  });
  it.skip("its+wrap", () => {
    const message = "text message";
    cy.wrap(message).should('contain','message');
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get('input').its('length').should('eq',2);
    const obj = {
        name: "Oleh",
        phone: "3333",
        country: "Ukraine"
    }
    cy.wrap(obj).its('name').should('eq',"Hello");
  });
  it("each", () => {
    cy.visit("https://the-internet.herokuapp.com/login");
    cy.get('input').each(($el)=>{
        cy.get("input#username").type("tomsmith");
        cy.get("input#password").type("WrongPassword");
        cy.log($el.val())
    })
  });
})
