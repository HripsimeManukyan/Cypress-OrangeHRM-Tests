const elements = {
    userRoleDropdown: () => cy.get('.oxd-select-text').eq(0),
    statusDropdown: () => cy.get('.oxd-select-text').eq(1),
    employeeNameInput: () => cy.get('input[placeholder="Type for hints..."]'),
    usernameInput: () => cy.get('.oxd-input').eq(1),
    passwordInput: () => cy.get('input[type="password"]').eq(0),
    confirmPasswordInput: () => cy.get('input[type="password"]').eq(1),
    existingUsernameError: () => cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message'),

}

export {elements};
