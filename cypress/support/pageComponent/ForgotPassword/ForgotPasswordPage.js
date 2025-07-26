class ForgotPasswordPage {
  visit() {
    cy.visit('/');
  }

  goToForgotPassword() {
    cy.get('.orangehrm-login-forgot > .oxd-text').click();
  }

  typeUsername(username) {
    cy.get('input[placeholder="Username"]').type(username);
  }

  clickResetPassword() {
    cy.get('button[type="submit"]').click();
  }

  assertResetSuccess() {
    cy.get('.orangehrm-forgot-password-title').should('contain.text', 'Reset Password link sent successfully');
  }
}

export default new ForgotPasswordPage();
