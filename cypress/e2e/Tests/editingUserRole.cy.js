import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe( 'Editing an existing user’s role', () => {
    it('Test  editing an existing user’s role functionality', () => {


        const username = 'Ram Kumar'
        const user_role = 'Admin'



        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.typeUserName(username)
        userManagementPage.clickSearch()
        userManagementPage.clickEdit()
        userManagementPage.selectUserRole(user_role)
        userManagementPage.clickSave()
        userManagementPage.assertSuccessMessage()
        userManagementPage.verifyUpdatedUserRole()
    })
})
