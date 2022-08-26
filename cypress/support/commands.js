/// <reference types= "Cypress" />

let locators = require('../fixtures/webelements.json')

Cypress.Commands.add('search', (article) => {
    cy.get(locators.wikipedia_AdvanceSearch).type(article);
    cy.get(locators.wikipedia_SearchIcon).click();
})

Cypress.Commands.add('navigate', (url) => {
    cy.visit(url);
})

Cypress.Commands.add('verifyHeaderText', () => {
    cy.get(locators.wikipedia_FirstHeader).then(($headerText) => {
        const headerText = $headerText.text()
        return cy.wrap(headerText);
    })
})

Cypress.Commands.add('infoBoxValue', (label) => {
    cy.contains('tr', label).within($tr => {
        cy.get('td')
            .invoke('text')
            .then((infoValue) => {
                return cy.wrap(infoValue);
            })
    })
})

Cypress.Commands.add('countryVsCompetition', (Country) => {
    cy.xpath("//table[@class='wikitable']//tr//a[@title='" + Country + "']/parent::td/preceding-sibling::td/a")
        .invoke('text')
        .then((competition) => {
            return cy.wrap(competition);
        })
})