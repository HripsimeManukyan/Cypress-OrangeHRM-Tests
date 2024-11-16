import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Adding and verifying a duplicate User', () => {
    it('Test  duplicate user functionality', () => {

        const user_role = 'Admin'
        const user_status = 'Enabled'
        const employee_name = 'James  Butler'
        const username = 'User234'
        const password = 'test1234'
        const confirm_password = 'test1234'


        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.clickAddUSer()
        userManagementPage.selectUserRole(user_role)
        userManagementPage.selectStatus(user_status)
        userManagementPage.fillUserDetails(employee_name,username,password,confirm_password)
        userManagementPage.clickSave()
        userManagementPage.verifySuccessMessage()
        userManagementPage.clickAddUSer()
        userManagementPage.selectUserRole(user_role)
        userManagementPage.selectStatus(user_status)
        userManagementPage.fillUserDetails(employee_name,username,password,confirm_password)
        userManagementPage.clickSave()
        userManagementPage.verifyDuplicateUsernameError()
    })
})
