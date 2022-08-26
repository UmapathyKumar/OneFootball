/// <reference types= "Cypress" />

let locators = require('../../fixtures/webelements.json')

describe("Wikipedia Advance Search Functionality", () => {
    const searchText = 'OneFootball';

    before(() => {
        cy.navigate(Cypress.env('url'));
        cy.search(searchText);
    })

    it("verify the searched article in the header", () => {
        cy.verifyHeaderText().then((headerText) => {
            expect(headerText).to.contain(searchText)
        })
    })

    it("Verify the title", () => {
        cy.title().should('include', searchText);
    })

    it("Verify the url", () => {
        cy.url().should('include', searchText);
    })

    it("Search for Founder and return value ", () => {
        cy.infoBoxValue('Founder').then((infoValue) => {
            expect(infoValue).to.contain('Lucas von Cranach')
        })
    })

    it("Pass the country and return the competition ", () => {
        cy.countryVsCompetition('Germany')
            .then((competitionResult) => {
                expect(competitionResult).to.eq('Bundesliga')
            })
    })
})