describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  })
  it('visits the app', () => {
    cy.visit('/')
  })
})

describe('API Requests', () => {
  it('retrieves team data from API', () => {
    cy.request(
      'https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=chicago_blackhawks',
    ).should(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('teams')
      expect(response.body.teams).to.have.length(1)
    })
  })
})

describe('Rendering Fetched Data', () => {
  it('renders team name text to the page', () => {
    cy.get('#banner-title').should('be.visible')
  })
  it('renders team history text to the page', () => {
    cy.get('#team-description').should('be.visible')
  })
})

describe('Rendering Fetched Images', () => {
  // using natural width greater than 0 to assure that an actual image loads
  it('renders banner image to the page', () => {
    cy.get('#banner-img')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
  it('renders all 4 thumbnail images to the page', () => {
    cy.get('#thumbnail-image-0')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('#thumbnail-image-1')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('#thumbnail-image-2')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
    cy.get('#thumbnail-image-3')
      .should('be.visible')
      .and($img => {
        expect($img[0].naturalWidth).to.be.greaterThan(0)
      })
  })
})
