import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/signInPage"
import SignUpPage from "../pages/signUpPage"

const signInPage = new SignInPage
const signUpPage = new SignUpPage

describe('Real World App Sign Up', () => {
  
    it('Fail Sign Up - Should appear an error message when attempting to sign up without credentials', () => {
        signInPage.accessSignInPage()
        signInPage.checkSignInPage()
        signInPage.accessSignUpPage()

        signUpPage.checkSignUpPage()
        signUpPage.checkInvalidSignUp()
    })

    it('Success Sign Up - Should sign up with valid data', () => {
        signInPage.accessSignInPage()
        signInPage.checkSignInPage()
        signInPage.accessSignUpPage()

        signUpPage.checkSignUpPage()
        signUpPage.signUpWithValidData(userData.userData.firstName, userData.userData.lastName, userData.userData.username, userData.userData.password)

        signInPage.checkSignInPage()
    })
})