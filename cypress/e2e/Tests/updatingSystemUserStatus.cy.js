import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Updating System User Status', () => {
    it('Test system user status update functionality', () => {

        const username = 'Shreya'
        const status = 'Enabled'


        LoginPage.navigateTo();
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.typeUserName(username)
        userManagementPage.clickSearchButton()
        userManagementPage.clickEdit()
        userManagementPage.selectStatus(status)
        userManagementPage.clickSave()
        userManagementPage.verifyUpdatedUserStatus()
    })
})
