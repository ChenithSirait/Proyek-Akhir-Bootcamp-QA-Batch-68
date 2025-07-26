import LoginPage from '../../support/pageComponent/Login/LoginPage';

describe('TC_LOGIN', () => {
  it('TC_003_LOGIN_EMPTY_FIELDS', () => {
    
    LoginPage.visit();

    // Tidak mengisi username & password, langsung klik Login
    LoginPage.clickLogin();

    // Validasi pesan error "Required"
    LoginPage.assertRequiredFields();
  });
});
