import CommonLocators from "../support/PageObject/CommonLocators"

const testData = require('../fixtures/pizzaVariations.json');

describe('example to-do app', () => {
    testData.forEach((testData) => {
        it('Success pizza orders', () => {
            const commonLocators = new CommonLocators();

            //Precondition
            commonLocators.goToMainPage();
            commonLocators.getEntityButtonLocator().click()
            commonLocators.getAddPizzaButtonLocator().click()

            //Act
            cy.get(testData.pizzaLocator).click()
            cy.get(testData.fillingLocator).click()
            commonLocators.getSubmitButtonLocator().should('be.enabled')
            commonLocators.getSubmitButtonLocator().click()

            //Assert
            commonLocators.getSuccessfulLabelLocator().should('have.text', "Thank you for your order!")
        })
    });
})