describe('Note app', function () {
  beforeEach(function () {
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`)
    const user = {
      name: 'Jaimin',
      username: 'admin',
      password: 'admin123',
    }
    cy.request('POST', `${Cypress.env('BACKEND')}/users/`, user)
    cy.visit('')
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

  it('login fails with wrong password', function () {
    cy.contains('login').click()

    cy.get('#username').type('admin')
    cy.get('#password').type('wrong')

    cy.get('#login-button').click()

    // cy.get('.error').contains('Wrong credentials')
    cy.get('.error').should('contain', 'Wrong credentials')
    cy.get('.error').should('have.css', 'color', 'rgb(255, 0, 0)')
    cy.get('.error').should('have.css', 'border-style', 'solid')

    cy.get('html').should('not.contain', 'Jaimin logged-in')
  })

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'admin', password: 'admin123' })
    })

    it('a new note can be created', function () {
      cy.contains('new note').click()
      cy.get('#note-content').type('a note created by cypress')
      cy.contains('save').click()
      cy.contains('a note created by cypress')
    })

    describe('several notes exist', function () {
      beforeEach(function () {
        cy.login({ username: 'admin', password: 'admin123' })
        cy.createNote({
          content: 'first note',
          important: true,
        })
        cy.createNote({
          content: 'second note',
          important: true,
        })
        cy.createNote({
          content: 'third note',
          important: true,
        })
      })

      it('importance can be changed', function () {
        cy.contains('second note').parent().find('button').as('theButton')

        cy.get('@theButton').click()
        cy.get('@theButton').should('contain', 'make important')
      })
    })
  })
})
