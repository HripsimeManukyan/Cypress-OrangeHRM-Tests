class AdminPage {

    goToUserManagementTab() {
        cy.get("li.oxd-topbar-body-nav-tab.--parent.--visited", {timeout: 10000})
            .find("span.oxd-topbar-body-nav-tab-item")
            .contains('User Management')
    }

    logout() {
        cy.get('.oxd-userdropdown-name').click()
        cy.contains('Logout').click()
    }

    verifyAccessDenied() {
        cy.contains('You do not have permission').should('be.visible')
    }

    verifyAdminSectionNotVisible() {
        cy.get('nav .oxd-main-menu').contains('Admin')
            .find('span').should('not.exist')
    }

    visitJobTitlesPage() {
        cy.visit('/index.php/admin/viewJobTitleList')
    }

}

export default new AdminPage()
