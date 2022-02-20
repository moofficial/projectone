/// <reference types = "cypress" />

it('Login Test', function(){

cy.visit('https://opensource-demo.orangehrmlive.com/')
cy.get('#txtUsername').type('admin')
cy.get('#txtPassword').type('admin123')
cy.get('#btnLogin').click()
cy.get('#menu_admin_viewAdminModule > b').click()
})

it.only('Login Test', function(){
    cy.visit('https://sandbox.pay.shoptopup.com/login')
})