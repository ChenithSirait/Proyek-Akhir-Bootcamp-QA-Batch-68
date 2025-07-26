import ForgotPasswordPage from '../../support/pageComponent/ForgotPassword/ForgotPasswordPage';

describe('TC_FORGOT_PASSWORD', () => {
  it('TC_005_FORGOT_PASSWORD', () => {
    
    cy.intercept('POST', '/web/index.php/auth/requestResetPassword').as('resetRequest');

    ForgotPasswordPage.visit();
    ForgotPasswordPage.goToForgotPassword();
    ForgotPasswordPage.typeUsername('Admin');
    ForgotPasswordPage.clickResetPassword();

    cy.wait('@resetRequest').its('response.statusCode').should('eq', 302);

    ForgotPasswordPage.assertResetSuccess();
  });
});
