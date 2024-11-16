import {PageLocators} from "../../Locators/PageLocators";
import {elements} from "../../Locators/pageElements";


class UserManagementPage {
    constructor() {
        this.elements = elements
    }

    clickAddUSer() {
        cy.get('button').contains('Add').click()
    }


    selectUserRole(user_role) {
        this.elements.userRoleDropdown().click();
        cy.get('.oxd-select-dropdown').contains(user_role).click()
    }

    selectStatus(user_status) {
        this.elements.statusDropdown().click();
        cy.get('.oxd-select-dropdown').contains(user_status).click()
    }

    clickSearchButton() {
        cy.get(PageLocators.MainPages.search_button, {timeout: 10000}).click()
    }

    fillUserDetails(employee_name, username, password) {
        this.elements.employeeNameInput({timeout: 10000}).type(employee_name)
        this.elements.usernameInput().type(username)
        this.elements.passwordInput().type(password)
        this.elements.confirmPasswordInput().type(password)
    }

    clickSave() {
        cy.get(PageLocators.MainPages.save_button).click()
    }

    assertSuccessMessage() {
        cy.get('div.oxd-toast.oxd-toast--success', {timeout: 4000}).should('be.visible')
            .and('contain.text', 'SuccessSuccessfully Saved')
    }

    verifyUserInTheList() {
        cy.contains('User List').click()
        cy.get('.user-list').should('contain', 'Tester')
    }

    typeUserName(username) {
        cy.get(':nth-child(2) > .oxd-input', {timeout: 40000}).type(username)
    }

    clickSearch() {
        cy.get(PageLocators.MainPages.search_button).click()
    }

    clickEdit() {
        cy.contains('div[role="row"]', 'test_ivan')
            .find('.oxd-icon.bi-pencil-fill')
            .click()
    }

    verifyUpdatedUserRole() {
        cy.get('div.oxd-toast.oxd-toast--success').should('be.visible')
            .and('contain.text', 'SuccessSuccessfully updated')

    }

    selectCheckbox() {
        cy.get('i.oxd-icon.bi-check.oxd-checkbox-input-icon')
            .parents('label')
            .find('input[type="checkbox"]')
            .check({force: true})
    }


    clickDeleteButton() {
        cy.get(PageLocators.MainPages.delete_button, {timeout: 10000}).click()
    }

    confirmDeletion() {
        cy.get('#dialogDeleteBtn').click()
    }

    verifyUserNotInList(username) {
        cy.get('td[data-username="' + username + '"]')
            .should('not.exist')
    }

    verifyUserRole(user_role) {
        cy.get('table tbody tr').each(($row) => {
            cy.wrap($row).find('td').eq(2).should('have.text', user_role)
        });
    }

    verifyUpdatedUserStatus() {
        cy.get('div.oxd-toast.oxd-toast--success').should('be.visible')
            .and('contain.text', 'SuccessSuccessfully updated')

    }

    checkIcon() {
        cy.get(PageLocators.MainPages.checkIcon).check()
    }

    typeNewPassword(newPassword) {
        cy.get(PageLocators.MainPages.password_input).type(newPassword)

    }

    confirmNewPassword(newPassword) {
        cy.get(PageLocators.MainPages.confirm_password_input).type(newPassword)
    }

    verifySuccessMessage() {
        cy.get('div.oxd-toast.oxd-toast--success').should('be.visible')
            .and('contain.text', 'SuccessSuccessfully Saved')
    }

    createNewUser(newUsername, newPassword) {
        cy.get(PageLocators.MainPages.employee_name_input, {timeout: 10000}).type("Rahul  Das")
        cy.get(PageLocators.MainPages.username_input).type(newUsername)
        cy.get(PageLocators.MainPages.password_input).type(newPassword)
        cy.get(PageLocators.MainPages.confirm_password_input).type(newPassword)
    }

    verifyRequiredFieldErrors() {
        cy.get(PageLocators.MainPages.requiredFieldErrors).should('have.length.at.least', 4)
        cy.get(PageLocators.MainPages.requiredFieldErrors).each(($error) => {
            cy.wrap($error).should('contain', 'Required');
        })
    }

    enterInvalidData() {
        cy.get(PageLocators.MainPages.username_input).type('user@#$%')
        cy.get(PageLocators.MainPages.employee_name_input).type('Invalid Employee')
        cy.get(PageLocators.MainPages.password_input).type('weak')
        cy.get(PageLocators.MainPages.confirm_password_input).type('weak123')
    }

    verifyInvalidDataErrors() {
        cy.get(PageLocators.MainPages.invalidDataErrors).should('exist')
        cy.contains('Should not contain special characters').should('exist')
        cy.contains('Invalid').should('exist')
        cy.contains('Should have at least 7 characters').should('exist')
        cy.contains('Passwords do not match').should('exist')

    }

    enterValidData() {
        this.elements.userRoleDropdown().click()
        cy.get('.oxd-select-dropdown').contains('Admin').click()

        this.elements.employeeNameInput().clear().type('Cecil  Bonaparte', {timeout: 1000})
        cy.get('.oxd-autocomplete-dropdown').contains('Cecil').click()

        this.elements.statusDropdown().click();
        cy.get('.oxd-select-dropdown').contains('Enabled').click()

        this.elements.usernameInput().clear().type('validuser123')
        this.elements.passwordInput().clear().type('StrongPass123!')
        this.elements.confirmPasswordInput().clear().type('StrongPass123!')
    }

    verifyDuplicateUsernameError() {
        this.elements.existingUsernameError()
            .should('be.visible')
            .and('contain', 'Already exists')
    }
}

export default new UserManagementPage;
