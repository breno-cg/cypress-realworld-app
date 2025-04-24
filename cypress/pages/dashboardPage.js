class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardTablist: "[role='tablist']"
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().dashboardTablist).should('be.visible')
    }

}

export default DashboardPage