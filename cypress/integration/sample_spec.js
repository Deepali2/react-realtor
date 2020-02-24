describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(true)
  })
})

describe('My First Test', function () {
  it('Does not do much!', function () {
    expect(true).to.equal(false)
  })
})

describe('My First Test', function () {
  it('Visits the Kitchen Sink', function () {
    cy.visit('https://example.cypress.io')
  })
})

describe('My First Test', function () {
  it('finds the content "type"', function () {
    cy.visit('https://example.cypress.io')

    cy.contains('type')
  })
})

describe('My First Test', function () {
  it('clicks the link "type"', function () {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()
  })
})

describe('My First Test', function () {
  it('clicking "type" navigates to a new url', function () {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')
  })
})

describe('My First Test', function () {
  it('Gets, types and asserts', function () {
    cy.visit('https://example.cypress.io')

    cy.contains('type').click()

    // Should be on a new URL which includes '/commands/actions'
    cy.url().should('include', '/commands/actions')

    // Get an input, type into it and verify that the value has been updated
    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
  })
})