import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import LandingPage from "../Pages/landingPage";

describe('Bulk user creation and validation', () => {
    let testData = {
        newUsers: [{
            employeeName: '',
            username: '',
            password: '',
            role: '',
            status: ''
        }]
    };


    before(() => {

        cy.fixture('testData.json').then((data) => {
            testData = data
        })
    })

    it('Test adding a new user in the admin section functionality', () => {

        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        LandingPage.navigateToAdmin()

        testData.newUsers.forEach((user) => {

            LandingPage.addUser(
                user.employeeName,
                user.username,
                user.password,
                user.role,
                user.status
            )
        })

        testData.newUsers.forEach((user) => {
            LandingPage.verifyUserDetails(
                user.username,
                user.role,
                user.status
            )
        })
    })
})
