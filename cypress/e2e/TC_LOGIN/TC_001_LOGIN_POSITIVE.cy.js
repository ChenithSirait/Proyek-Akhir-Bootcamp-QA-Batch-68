import LoginPage from '../../support/pageComponent/Login/LoginPage';
const loginData = require('../../fixtures/Data/loginData.json');

describe('TC_LOGIN', () => {
  it('TC_001_LOGIN_POSITIVE', () => {
    const { username, password } = loginData.validUser;

  
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

    // Jalankan langkah login
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

  
    cy.wait('@loginRequest').then((interception) => {
      // Tambahkan log untuk debugging
      cy.log('Response status: ' + interception.response.statusCode);
      expect(interception.response.statusCode).to.eq(302);
    });

    // Verifikasi redirect ke dashboard
    LoginPage.assertLoginSuccess();
  });
});
