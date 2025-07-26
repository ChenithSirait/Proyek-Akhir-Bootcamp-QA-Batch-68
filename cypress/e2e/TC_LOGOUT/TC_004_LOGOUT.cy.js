import LoginPage from '../../support/pageComponent/Login/LoginPage';
import LogoutPage from '../../support/pageComponent/Logout/LogoutPage';

const loginData = require('../../fixtures/Data/loginData.json');

describe('TC_LOGOUT', () => {
  Cypress.on('uncaught:exception', () => false);

  it('TC_004_LOGOUT', () => {
    const { username, password } = loginData.validUser;

    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

    // Step login
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

  
    cy.wait('@loginRequest');

    LoginPage.assertLoginSuccess();

    // Logout
    LogoutPage.clickProfileAndLogout();


    LogoutPage.assertRedirectToLogin();
  });
});
