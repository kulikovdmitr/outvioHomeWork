import {getTestHost} from "../configuration";

class CommonLocators {

    goToMainPage() {
        cy.visit(getTestHost())
    }

    getEntityButtonLocator() {
        return cy.get('[marker="entry-btn"]');
    }

    getHeaderLabelLocator() {
        return cy.get('[marker="header-lbl"]')
    }

    getAddPizzaButtonLocator() {
        return cy.get('[marker="add-pizza-btn"]')
    }

    getSubmitButtonLocator() {
        return cy.get('[marker="submit-btn"]')
    }

    getRemoveButtonLocator(id) {
        return cy.get(`[marker="remove-btn-${id}"]`)
    }

    getSmallPizzaButtonLocator(id) {
        return cy.get(`[marker="smallPizza-size-btn-${id}"]`)
    }

    getMediumPizzaButtonLocator(id) {
        return cy.get(`[marker="mediumPizza-size-btn-${id}"]`)
    }

    getLargePizzaButtonLocator(id) {
        return cy.get(`[marker="largePizza-size-btn-${id}"]`)
    }

    getCheeseButtonLocator(id) {
        return cy.get(`[marker="cheese-btn-${id}"]`)
    }

    getBaconButtonLocator(id) {
        return cy.get(`[marker="bacon-btn-${id}"]`)
    }

    getEggButtonLocator(id) {
        return cy.get(`[marker="egg-btn-${id}"]`)
    }

    getSuccessfulLabelLocator() {
        return cy.get('[marker="successful-label"]')
    }

}

export default CommonLocators