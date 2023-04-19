/// <reference types="cypress" />

describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  })

  it('fetches locations data when datetime is valid', () => {
    cy.get('.react-datetime-picker__inputGroup__year').type(2022);
    cy.get('.react-datetime-picker__inputGroup__month').type(2);
    cy.get('.react-datetime-picker__inputGroup__day').type(2);
    cy.get('.react-datetime-picker__inputGroup__hour').type(2);
    cy.get('.react-datetime-picker__inputGroup__minute').type(2);

    cy.contains('Kallang');
  });

  it('does not fetch anything when datetime is incorrect valid', () => {
    cy.get('.react-datetime-picker__inputGroup__year').type(2016);
    cy.get('.react-datetime-picker__inputGroup__month').type(3);
    cy.get('.react-datetime-picker__inputGroup__day').type(1);
    cy.get('.react-datetime-picker__inputGroup__hour').type(1);
    cy.get('.react-datetime-picker__inputGroup__minute').type(1);

    cy.get('[data-test-id=locations]').should('not.exist');
  });
});

