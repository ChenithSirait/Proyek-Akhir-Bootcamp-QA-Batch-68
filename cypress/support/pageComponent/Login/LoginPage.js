class LoginPage {
  visit() {
    cy.visit('/web/index.php/auth/login');
    cy.url().should('include', '/auth/login');
    cy.get('input[name="username"]', { timeout: 10000 }).should('be.visible');
  }

  enterUsername(username) {
    cy.get('input[name="username"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(username);
  }

  enterPassword(password) {
    cy.get('input[name="password"]', { timeout: 10000 })
      .should('be.visible')
      .clear()
      .type(password);
  }

  clickLogin() {
    cy.get('button[type="submit"]', { timeout: 10000 }).should('be.visible').click(); 
  }

  assertLoginSuccess() {
    cy.url({ timeout: 10000 }).should('include', '/dashboard');
    cy.contains('Dashboard', { timeout: 10000 }).should('be.visible');
  }

  assertLoginFailed() {
    cy.get('.oxd-alert-content-text', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Invalid credentials');
  }

  assertRequiredFields() {
    cy.get('.oxd-input-group .oxd-input-field-error-message', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Required');
  }

  
  interceptLoginSuccess() {
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequestSuccess');
  }

  interceptLoginFailed() {
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequestFailed');
  }
}

export default new LoginPage();
