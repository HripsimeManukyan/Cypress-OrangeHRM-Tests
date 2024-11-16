import {PageLocators} from "../../Locators/PageLocators";
import {constants} from "../../Locators/PageLocators";

class LoginPage {

    navigateTo() {
        cy.visit(constants.url)
    }

    login(username, password) {
        cy.get(PageLocators.Login.username_input).type(username)
        cy.get(PageLocators.Login.password_input).type(password)
    }

    click_login_button() {
        cy.get(PageLocators.Login.loginButton).click()
    }

    assertLoginSuccess() {
        cy.url().should('include', '/dashboard')
    }
}

export default new LoginPage
