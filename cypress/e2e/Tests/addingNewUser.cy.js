import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Adding a New User in the Admin Section ', () => {
    it('Test  adding a new user in the admin section functionality', () => {


        const user_role = 'Admin'
        const user_status = 'Enabled'
        const employee_name = 'Lisa  Jackson'
        const username = 'Lisa2'
        const password = '12345678t'
        const confirm_password = '12345678t'


        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.clickAddUSer()
        userManagementPage.selectUserRole(user_role)
        userManagementPage.selectStatus(user_status)
        userManagementPage.fillUserDetails(employee_name, username, password, confirm_password)
        userManagementPage.clickSave()
        userManagementPage.assertSuccessMessage()
        userManagementPage.verifyUserInTheList()
    })
})
