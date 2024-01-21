
describe('template spec', () => {

  it('loginpopup', () => {

    const iphone = Cypress.env('IPHONE_PRICE');

    cy.visit('https://oscomp.ru/').clearAllCookies;

    cy.get('#title-search-input_fixed').click().type('Apple iPhone 15 256GB Pink').type('{enter}');
    cy.get(".section-gallery-wrapper__item._active").first().click();
    cy.get(".price_value").contains(iphone);
    
    
  })
})

