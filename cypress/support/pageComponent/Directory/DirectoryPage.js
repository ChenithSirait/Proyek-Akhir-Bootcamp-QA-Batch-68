class DirectoryPage {
  visit() {
    cy.get('.oxd-main-menu-item').contains('Directory').click();
    cy.url().should('include', '/directory');
    cy.get('input[placeholder="Type for hints..."]').should('be.visible'); // pastikan halaman siap
  }

  resetEmployee() {
    cy.get('button[type="reset"]').should('be.visible').click();
  }

  assertResetSuccess() {
    cy.get('input[placeholder="Type for hints..."]').should('have.value', '');
  }

  searchEmployee(name) {
    cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    cy.get('button[type="submit"]').click();
  }

  assertEmployeeNotFound() {
    cy.contains('No Records Found', { timeout: 10000 }).should('be.visible');
  }
}

export default new DirectoryPage();
