import LoginPage from "../Pages/loginPage";
import {constants} from "../../Locators/pageLocators";
import dashBoardPage from "../Pages/dashBoardPage";
import adminPage from "../Pages/adminPage";
import userManagementPage from "../Pages/userManagementPage";

describe('Verifying mandatory fields and validation Messages', () => {
    it('Test mandatory fields validation functionality', () => {

        LoginPage.navigateTo();
        LoginPage.login(constants.username, constants.password)
        LoginPage.click_login_button()
        LoginPage.assertLoginSuccess()
        dashBoardPage.open_AdminSection()
        adminPage.goToUserManagementTab()
        userManagementPage.clickAddUSer()
        userManagementPage.clickSave()
        userManagementPage.verifyRequiredFieldErrors()
        userManagementPage.enterInvalidData()
        userManagementPage.verifyInvalidDataErrors()
        userManagementPage.enterValidData()
        userManagementPage.clickSave()
        userManagementPage.verifySuccessMessage()
    })
})
