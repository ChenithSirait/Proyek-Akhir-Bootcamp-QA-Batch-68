class LogoutPage {
  clickProfileAndLogout() {
    cy.get('.oxd-userdropdown-icon', { timeout: 10000 }).should('be.visible').click();
    cy.contains('Logout', { timeout: 10000 }).should('be.visible').click();
  }

  assertRedirectToLogin() {
    cy.url({ timeout: 10000 }).should('include', '/auth/login');
    cy.get('input[name="username"]').should('be.visible');
  }
}

export default new LogoutPage();
