class CommonLocators {
    goToMainPage() {
        cy.visit('http://localhost:3000')
    }

    getEntityButtonLocator() {
        return cy.get('[data-marker="entry-btn"]');
    }

    getHeaderLabelLocator() {
        return cy.get('[data-marker="header-lbl"]')
    }

    getAddPizzaButtonLocator() {
        return cy.get('[data-marker="add-pizza-btn"]')
    }

    getSubmitButtonLocator() {
        return cy.get('[data-marker="submit-btn"]')
    }

    getRemoveButtonLocator(id) {
        return cy.get(`[data-marker="remove-btn-${id}"]`)
    }

    getSmallPizzaButtonLocator(id) {
        return cy.get(`[data-marker="smallPizza-size-btn-${id}"]`)
    }

    getMediumPizzaButtonLocator(id) {
        return cy.get(`[data-marker="mediumPizza-size-btn-${id}"]`)
    }

    getLargePizzaButtonLocator(id) {
        return cy.get(`[data-marker="largePizza-size-btn-${id}"]`)
    }

    getCheeseButtonLocator(id) {
        return cy.get(`[data-marker="cheese-btn-${id}"]`)
    }

    getBaconButtonLocator(id) {
        return cy.get(`[data-marker="bacon-btn-${id}"]`)
    }

    getEggButtonLocator(id) {
        return cy.get(`[data-marker="egg-btn-${id}"]`)
    }


}

export default CommonLocators