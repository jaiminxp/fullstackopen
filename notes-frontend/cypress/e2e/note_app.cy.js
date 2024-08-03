describe('Note app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3001/api/testing/reset')
    const user = {
      name: 'Jaimin',
      username: 'admin',
      password: 'admin123',
    }
    cy.request('POST', 'http://localhost:3001/api/users/', user)
    cy.visit('http://localhost:5173')
  })

  it('front page can be opened', function () {
    cy.contains('Notes')
    cy.contains(
      'Note app, Department of Computer Science, University of Helsinki 2024'
    )
  })

  it('login form can be opened', function () {
    cy.contains('login').click()

    cy.get('#username').type('admin')
    cy.get('#password').type('admin123')

    cy.get('#login-button').click()

    cy.contains('Jaimin logged-in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains('login').click()
      cy.get('input:first').type('admin')
      cy.get('input:last').type('admin123')
      cy.get('#login-button').click()
    })

    it('a new note can be created', function () {
      cy.contains('new note').click()
      cy.get('#note-content').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })
  })
})
