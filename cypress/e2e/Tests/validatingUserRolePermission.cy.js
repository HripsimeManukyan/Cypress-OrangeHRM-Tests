import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Validating User Role Permission', () => {
    it('Test user role validation functionality', () => {

        const newUsername = 'testESSUser'
        const newPassword = 'password123'
        const userRole = 'ESS'


        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.clickAddUSer()
        userManagementPage.selectUserRole()
        userManagementPage.selectStatus()
        userManagementPage.createNewUser(newUsername,newPassword,userRole)
        userManagementPage.clickSave()
        userManagementPage.verifySuccessMessage()
        adminPage.logout()
        LoginPage.navigateTo()
        LoginPage.login(newUsername, newPassword)
        adminPage.visitJobTitlesPage()
        adminPage.verifyAdminSectionNotVisible()
        adminPage.verifyAccessDenied()
    })
})
