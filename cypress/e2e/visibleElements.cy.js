import CommonLocators from "../support/PageObject/CommonLocators"

describe('example to-do app', () => {
  beforeEach(() => {

    //cy.exec('yarn start && yarn run start-server')
  })

  it('check displays button "Order your 🍕" ', () => {
    const commonLocators = new CommonLocators();
    commonLocators.goToMainPage();

    commonLocators.getEntityButtonLocator().should('be.visible')
    commonLocators.getEntityButtonLocator().should("contain.text","Order your 🍕")
    commonLocators.getEntityButtonLocator().should('be.enabled')
  })

  it('check elements after click the order button', () => {
    const commonLocators = new CommonLocators();
    commonLocators.goToMainPage();
    commonLocators.getEntityButtonLocator().click();

    commonLocators.getHeaderLabelLocator().should("contain.text","Assemble your pizza(s)")
    commonLocators.getAddPizzaButtonLocator().should('be.enabled')
    commonLocators.getAddPizzaButtonLocator().should("contain.text","Add pizza")
    commonLocators.getSubmitButtonLocator().should('not.be.enabled')
    commonLocators.getSubmitButtonLocator().should("contain.text","submit order")

  })

  it('check elements after Add pizza click', () => {
    const commonLocators = new CommonLocators();
    commonLocators.goToMainPage();
    commonLocators.getEntityButtonLocator().click();
    commonLocators.getAddPizzaButtonLocator().click();

    commonLocators.getHeaderLabelLocator().should("contain.text","Assemble your pizza(s)")
    commonLocators.getRemoveButtonLocator(1).should("be.visible")

    //Assert buttons
    commonLocators.getSmallPizzaButtonLocator(1).should("be.visible")
    commonLocators.getSmallPizzaButtonLocator(1).should("contain.text","small")

    commonLocators.getMediumPizzaButtonLocator(1).should("be.visible")
    commonLocators.getMediumPizzaButtonLocator(1).should("contain.text","medium")

    commonLocators.getLargePizzaButtonLocator(1).should("be.visible")
    commonLocators.getLargePizzaButtonLocator(1).should("contain.text","large")

    commonLocators.getCheeseButtonLocator(1).should("be.visible")
    commonLocators.getCheeseButtonLocator(1).should("contain.text","cheese")

    commonLocators.getBaconButtonLocator(1).should("be.visible")
    commonLocators.getBaconButtonLocator(1).should("contain.text","bacon")

    commonLocators.getEggButtonLocator(1).should("be.visible")
    commonLocators.getEggButtonLocator(1).should("contain.text","egg")

    commonLocators.getAddPizzaButtonLocator().should('be.enabled')
    commonLocators.getAddPizzaButtonLocator().should("contain.text","Add pizza")

    commonLocators.getSubmitButtonLocator().should('not.be.enabled')
    commonLocators.getSubmitButtonLocator().should("contain.text","submit order")
  })
})