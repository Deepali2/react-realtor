describe('The API works', function () {
  it('Gets the json from the rooftop API', function () {
    cy.request('http://dev1-sample.azurewebsites.net/properties.json')
  })
})

describe('WebPage', function () {
  beforeEach(() => {
    cy.visit('/')
  })
  it('successfully loads', function () {
    cy.visit('/')
  })
  it('contains the heading', () => {
    cy.visit('/')
    cy.contains('roofstock')
  })
})

