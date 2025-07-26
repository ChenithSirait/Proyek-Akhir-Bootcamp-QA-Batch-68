import LoginPage from '../../support/pageComponent/Login/LoginPage';
import DirectoryPage from '../../support/pageComponent/Directory/DirectoryPage';

const loginData = require('../../fixtures/Data/loginData.json');

describe('TC_DIRECTORY_RESET', () => {
  beforeEach(() => {
    const { username, password } = loginData.validUser;

    // Intercept login jika ingin validasi (opsional)
    cy.intercept('POST', '/web/index.php/auth/validate').as('loginRequest');

    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    // Tunggu response login
    cy.wait('@loginRequest');
    LoginPage.assertLoginSuccess();
  });

  it('TC_006_RESET_EMPLOYEE', () => {
    // Intercept untuk reset/filter Directory (jika applicable)
    cy.intercept('GET', '**/web/index.php/api/v2/directory/employees*').as('resetDirectory');

    DirectoryPage.visit();
    DirectoryPage.resetEmployee();

    // Tunggu response GET untuk reset/filter data directory
    cy.wait('@resetDirectory');

    DirectoryPage.assertResetSuccess();
  });
});
