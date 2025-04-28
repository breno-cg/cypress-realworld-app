class TransactionPage {

    selectorsList() {
        const selectors = {
            contactsList: "[data-test='users-list']",
            firstContact: "[data-test='user-list-item-GjWovtg2hr']",
            amountField: "#amount",
            noteField: "#transaction-create-description-input",
            payButton: "[data-test='transaction-create-submit-payment']",
            successAlertBar: '[data-test="alert-bar-success"]'
            //failAlertBar: '[data-test="alert-bar-failure"]'
        }

        return selectors
    }

    checkTransactionPage() {
        cy.get(this.selectorsList().contactsList).should('be.visible')
    }

    chooseContact() {
        cy.get(this.selectorsList().firstContact).click({force: true})
    }

    fillMoneyTransactionForm(amount, note, balance) {
        cy.get(this.selectorsList().amountField).type(amount)
        cy.get(this.selectorsList().noteField).type(note)
        cy.get(this.selectorsList().payButton).click()
        if (amount <= balance) {
            cy.get(this.selectorsList().successAlertBar).should('be.visible')
        } else {
            //cy.get(this.selectorsList().failAlertBar).should('be.visible')
        }
    }
}

export default TransactionPage