import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Resetting User Password', () => {
    it('Test resetting user password functionality', () => {

        const username = 'Ram Kumar'
        const newPassword = 't123456'



        LoginPage.navigateTo();
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.typeUserName(username)
        userManagementPage.clickSearchButton()
        userManagementPage.clickEdit()
        userManagementPage.checkIcon()
        userManagementPage.typeNewPassword(newPassword)
        userManagementPage.confirmNewPassword(newPassword)
        userManagementPage.clickSave()
        userManagementPage.verifySuccessMessage()
    })
})
