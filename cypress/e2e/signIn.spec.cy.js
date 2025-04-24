import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/signInPage"
import DashboardPage from "../pages/dashboardPage"

const signInPage = new SignInPage
const dashboardPage = new DashboardPage

describe('Real World App Sign In', () => {
  
  it('Fail Sign In - Should appear an error message when attempting to sign in with invalid credentials', () => {
    signInPage.accessSignInPage()
    signInPage.checkSignInPage()
    signInPage.signInWithAnyUser("anything", "anything123")
    signInPage.checkAccessInvalid()
  })

  it('Success Sign In - Should sign in with a valid register', () => {
    signInPage.accessSignInPage()
    signInPage.checkSignInPage()
    signInPage.signInWithAnyUser(userData.userData.username, "s3cret")

    dashboardPage.checkDashboardPage()
  })
})