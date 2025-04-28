class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardTablist: "[role='tablist']",
            newTransactionButton: "[data-test='nav-top-new-transaction']"
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().dashboardTablist).should('be.visible')
    }

    accessTransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

}

export default DashboardPage