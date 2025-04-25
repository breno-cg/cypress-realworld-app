class SignUpPage {

    selectorsList() {
        const selectors = {
            signUpForm: ".SignUpForm-form",
            signUpButton: "[data-test='signup-submit']",
            wrongFillingAlert: ".MuiFormHelperText-contained",
            firstNameField: "#firstName",
            lastNameField: "#lastName",
            usernameField: "#username",
            passwordField: "#password",
            confirmPasswordField: "#confirmPassword"
        }

        return selectors
    }

    checkSignUpPage() {
        cy.location('pathname').should('equal', '/signup')
        cy.get(this.selectorsList().signUpForm).should('be.visible')
    }

    checkInvalidSignUp() {
        cy.get(this.selectorsList().signUpButton).click()
        cy.get(this.selectorsList().wrongFillingAlert).should('be.visible')
    }

    signUpWithValidData(firstName, lastName, username, password) {
        cy.get(this.selectorsList().firstNameField).type(firstName)
        cy.get(this.selectorsList().lastNameField).type(lastName)
        cy.get(this.selectorsList().usernameField).type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().confirmPasswordField).type(password)
        cy.get(this.selectorsList().signUpButton).click()
    }

}

export default SignUpPage