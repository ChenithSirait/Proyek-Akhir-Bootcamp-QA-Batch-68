import LoginPage from '../../support/pageComponent/Login/LoginPage';

const loginData = require('../../fixtures/Data/loginData.json');
const dashboardData = require('../../fixtures/Data/dashboardData.json');

describe('TC_DIRECTORY_SEARCH', () => {
  before(() => {
    const { username, password } = loginData.validUser;

    LoginPage.visit();
    LoginPage.enterUsername(username);
    LoginPage.enterPassword(password);
    LoginPage.clickLogin();

    // Tunggu menu utama muncul sebagai bukti login berhasil
    cy.get('.oxd-main-menu-item', { timeout: 10000 }).should('be.visible');
  });

  it('TC_007_SEARCH_EMPLOYEE', () => {
    const { name } = dashboardData.employee;

    // Intercept semua request untuk observasi (sementara)
    cy.intercept({ method: 'POST', url: '**/web/index.php/**' }, (req) => {
      console.log('Intercepted:', req.url);
    }).as('anyRequest');

    // Klik menu Directory
    cy.get('.oxd-main-menu-item', { timeout: 10000 })
      .contains('Directory')
      .click();
    cy.url().should('include', '/directory');

    // Input nama dan klik search
    cy.get('input[placeholder="Type for hints..."]', { timeout: 10000 })
      .clear()
      .type(name);
    cy.get('button[type="submit"]').click();

    // Tunggu dan observasi request
    cy.wait('@anyRequest');

    // Validasi hasil muncul
    cy.contains('.oxd-text', name, { timeout: 10000 }).should('be.visible');
  });
});
