/// <reference types="cypress" />
describe("task 1-5", () => {
    beforeEach(()=>{
      cy.visit("https://qauto.forstudy.space/", {
        auth: {
          username: "guest",
          password: "welcome2qauto",
        }
      });
    });
  it("Facebook link validation", () => {
    cy.get('a.socials_link').eq(0).invoke('hasClass','icon-facebook');
    cy.get('a.socials_link').eq(0).invoke('attr','href').should('contain','https://www.facebook.com/Hillel.IT.School')
  });
  it("Telegram link validation", () => {
    cy.get('a.socials_link').eq(1).invoke('hasClass','icon-telegram');
    cy.get('a.socials_link').eq(1).invoke('attr','href').should('contain','https://t.me/ithillel_kyiv')
  });
  it("YouTube link validation", () => {
    cy.get('a.socials_link').eq(2).invoke('hasClass','icon-youtube');
    cy.get('a.socials_link').eq(2).invoke('attr','href').should('contain','https://www.youtube.com/user/HillelITSchool?sub_confirmation=1')
  });
  it("Instagram link validation", () => {
    cy.get('a.socials_link').eq(3).invoke('hasClass','icon-instagram');
    cy.get('a.socials_link').eq(3).invoke('attr','href').should('contain','https://www.instagram.com/hillel_itschool/')
  });
  it("LinkedIn link validation", () => {
    cy.get('a.socials_link').eq(4).invoke('hasClass','icon-linkedin');
    cy.get('a.socials_link').eq(4).invoke('attr','href').should('contain','https://www.linkedin.com/school/ithillel/')
  });
  it("Sign In login form validation", () => {
    cy.contains('Sign In').click();
    cy.get('div.modal-content').scrollIntoView();
  });
});
describe("task 6", () => {
  beforeEach(()=>{
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    });
  });
it("Sign In login form validation", () => {
  cy.contains('Sign In').click();
  cy.get('div.modal-content').scrollIntoView();
});
});
describe("task 7", () => {
  beforeEach(()=>{
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto",
      }
    });
  });
it("Sign Up login form validation", () => {
  cy.contains('Sign up').click();
  cy.get('div.modal-content').scrollIntoView();
});
it("Sign Up title Registration validation", () => {
  cy.contains('Sign up').click();
  cy.get('div.modal-header>h4').should('have.text','Registration');
});
it("Sign Up Name text and Name field validation", () => {
  cy.contains('Sign up').click();
  // cy.get('//div[@class="form-group"]//label[@for="signupEmail"]').should('have.text','Name');
  cy.get('div.form-group label').eq(0).should('have.text','Name');
});
});