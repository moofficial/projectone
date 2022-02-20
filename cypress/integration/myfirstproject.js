/// <reference types = "cypress" />


it('google test', function(){
    cy.visit('https://google.com')
    cy.get('.gLFyf').type('Automation Step by Step {enter}')

    cy.get(':nth-child(3) > :nth-child(1) > .usJj9c > h3').click()

})