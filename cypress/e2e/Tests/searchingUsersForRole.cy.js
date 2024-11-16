import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";


describe( 'Searching for Users by Role', () => {
    it('Test  searching users by role functionality', () => {

        const  user_role = 'Admin'



        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.selectUserRole(user_role)
        userManagementPage.clickSearchButton()
        userManagementPage.verifyUserRole(user_role)
    })
})
