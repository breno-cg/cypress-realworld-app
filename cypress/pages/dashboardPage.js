class DashboardPage {

    selectorsList() {
        const selectors = {
            dashboardTablist: "[role='tablist']",
            newTransactionButton: "[data-test='nav-top-new-transaction']",
            transactionList: "[data-test='transaction-list']",
            emptyList: "[data-test='empty-list-header']",
            filterDateButton: "[data-test='transaction-list-filter-date-range-button']",
            testDate: ".Cal__Day__today"
        }

        return selectors
    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/')
        cy.get(this.selectorsList().dashboardTablist).should('be.visible')
    }

    checkTransactionList() {
        cy.get(this.selectorsList().transactionList).should('be.visible')
    }

    selectCurrentDateTransaction() {
        cy.get(this.selectorsList().filterDateButton).click({force: true})
        cy.get(this.selectorsList().testDate).click({force: true})
        cy.get(this.selectorsList().testDate).click({force: true})
    }

    checkEmptyList() {
        cy.get(this.selectorsList().emptyList).should('be.visible')
    }

    accessTransactionPage() {
        cy.get(this.selectorsList().newTransactionButton).click()
    }

}

export default DashboardPage