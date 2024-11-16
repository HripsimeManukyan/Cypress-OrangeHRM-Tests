import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe( 'Deleting a user', () => {
    it('Test  deleting a user functionality', () => {


        const username = 'RaviM'



        LoginPage.navigateTo()
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.typeUserName(username)
        userManagementPage.clickSearch()
        userManagementPage.selectCheckbox()
        userManagementPage.clickDeleteButton()
        userManagementPage.confirmDeletion()
        userManagementPage.verifyUserNotInList(username)
    })
})
