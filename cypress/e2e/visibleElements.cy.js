import CommonLocators from "../support/PageObject/CommonLocators"

describe('example to-do app', () => {
  it('check displays button "Order your 🍕" ', () => {
    const commonLocators = new CommonLocators();
    //Act
    commonLocators.goToMainPage();

    //Assert
    commonLocators.getEntityButtonLocator().should('be.visible')
    commonLocators.getEntityButtonLocator().should("contain.text","Order your 🍕")
    commonLocators.getEntityButtonLocator().should('be.enabled')
  })

  it('check elements after click the order button', () => {
    const commonLocators = new CommonLocators();

    //Precondition
    commonLocators.goToMainPage();

    //Act
    commonLocators.getEntityButtonLocator().click();

    //Assert
    commonLocators.getHeaderLabelLocator().should("contain.text","Assemble your pizza(s)")
    commonLocators.getAddPizzaButtonLocator().should('be.enabled')
    commonLocators.getAddPizzaButtonLocator().should("contain.text","Add pizza")
    commonLocators.getSubmitButtonLocator().should('not.be.enabled')
    commonLocators.getSubmitButtonLocator().should("contain.text","submit order")

  })

  it('check elements after Add pizza click', () => {
    const commonLocators = new CommonLocators();

    //Precondition
    commonLocators.goToMainPage();
    commonLocators.getEntityButtonLocator().click();

    //Act
    commonLocators.getAddPizzaButtonLocator().click();

    //Assert
    commonLocators.getHeaderLabelLocator().should("contain.text","Assemble your pizza(s)")
    commonLocators.getRemoveButtonLocator(1).should("be.visible")

    //Assert pizza-buttons
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

  it('close block after remove first item', () => {
    const commonLocators = new CommonLocators();

    //Precondition
    commonLocators.goToMainPage();
    commonLocators.getEntityButtonLocator().click();
    commonLocators.getAddPizzaButtonLocator().click();

    //Act
    commonLocators.getRemoveButtonLocator(1).click();

    //Assert
    commonLocators.getHeaderLabelLocator().should("contain.text","Assemble your pizza(s)")
    commonLocators.getAddPizzaButtonLocator().should('be.enabled')
    commonLocators.getAddPizzaButtonLocator().should("contain.text","Add pizza")
    commonLocators.getSubmitButtonLocator().should('not.be.enabled')
    commonLocators.getSubmitButtonLocator().should("contain.text","submit order")

    commonLocators.getRemoveButtonLocator(1).should("not.exist")
    commonLocators.getSmallPizzaButtonLocator(1).should("not.exist")
    commonLocators.getMediumPizzaButtonLocator(1).should("not.exist")
    commonLocators.getLargePizzaButtonLocator(1).should("not.exist")
    commonLocators.getCheeseButtonLocator(1).should("not.exist")
    commonLocators.getBaconButtonLocator(1).should("not.exist")
    commonLocators.getEggButtonLocator(1).should("not.exist")
  })
})