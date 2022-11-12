import CommonElements from "../support/common-elements";

describe('example to-do app', () => {
  //const CommonElements = new CommonElements();
    beforeEach(() => {
      cy.visit('http://localhost:3000')
      //CommonElements.getEntityButton.click();
    })

    it('displays two todo items by default1', () => {
    
      //CommonElements.getEntityButton.click();
      cy.get("[data-marker='entry-btn']").click();

      cy.get("[data-marker='add-pizza-btn']").click();

    })
})