import LoginPage from '../../support/pageComponent/Login/LoginPage';
const loginData = require('../../fixtures/Data/loginData.json');

describe('TC_LOGIN', () => {
  it('TC_002_LOGIN_NEGATIVE', () => {
    const { username, password } = loginData.invalidUser;

    // Intercept permintaan login POST
    cy.intercept('POST', '**/auth/validate').as('loginRequest');

    // Kunjungi halaman login dan coba login
    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    // Tunggu sampai request login dikirim dan redirect terjadi
    cy.wait('@loginRequest').its('response.statusCode').should('eq', 302);

    // Verifikasi UI bahwa login gagal (invalid credentials)
    LoginPage.assertLoginFailed();
  });
});
