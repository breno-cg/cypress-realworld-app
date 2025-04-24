class SignInPage {

    selectorsList() {
        const selectors = {
            signInForm: ".SignInForm-form",
            usernameField: "#username",
            passwordField: "#password",
            signInButton: ".SignInForm-submit",
            wrongCredentialAlert: ".MuiAlert-message"
        }

        return selectors
    }

    accessSignInPage() {
        cy.visit('/signin')
    }

    checkSignInPage() {
        cy.get(this.selectorsList().signInForm).should('be.visible')
    }

    signInWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().signInButton).click()
    }

    checkAccessInvalid() {
        cy.get(this.selectorsList().wrongCredentialAlert)
    }

}

export default SignInPage