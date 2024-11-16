class LandingPage {
    elements = {
        adminMenuItem: () => cy.get('span').contains('Admin'),
        addButton: () => cy.get('button').contains('Add'),
        userRoleDropdown: () => cy.get('.oxd-select-text').eq(0),
        statusDropdown: () => cy.get('.oxd-select-text').eq(1),
        employeeNameInput: () => cy.get('input[placeholder="Type for hints..."]'),
        usernameInput: () => cy.get('input[class="oxd-input oxd-input--active"]').eq(1),
        passwordInput: () => cy.get('input[type="password"]').eq(0),
        confirmPasswordInput: () => cy.get('input[type="password"]').eq(1),
        saveButton: () => cy.get('button[type="submit"]'),
        searchButton: () => cy.get('button[type="submit"]'),
        searchUsernameInput: () => cy.get('.oxd-input').eq(1),
        userTable: () => cy.get('.oxd-table-body')
    };

    navigateToAdmin() {
        this.elements.adminMenuItem().click();
        cy.url().should('include', '/admin/viewSystemUsers')
    }

    addUser(employeeName, username, password, role, status) {
        this.elements.addButton().click()
        this.elements.userRoleDropdown().click()
        cy.get('.oxd-select-dropdown').contains(role).click()
        this.elements.statusDropdown().click()
        cy.get('.oxd-select-dropdown').contains(status).click()
        this.elements.employeeNameInput().type(employeeName, {timeout: 1000})

        cy.get('.oxd-autocomplete-dropdown').contains(employeeName).click()
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.confirmPasswordInput().type(password)
        this.elements.saveButton().click({timeout: 1000})
        cy.contains('SuccessSuccessfully Saved').should('be.visible')
    }

    searchUser(username) {
        this.elements.searchUsernameInput().clear().type(username)
        this.elements.searchButton().click({timeout: 1000})

    }

    verifyUserDetails(username, role, status) {
        this.searchUser(username)
        this.elements.userTable().within(() => {
            cy.get('.oxd-table-cell').contains(username).should('exist')
            cy.get('.oxd-table-cell').contains(role).should('exist')
            cy.get('.oxd-table-cell').contains(status).should('exist')
        })
    }
}

export default new LandingPage();
