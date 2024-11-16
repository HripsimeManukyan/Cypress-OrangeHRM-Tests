class DashBoardPage {
    open_AdminSection() {
        cy.get('nav .oxd-main-menu').contains('Admin')
            .find('span').click()
    }

}

export default new DashBoardPage
