import userData from "../fixtures/users/userData.json"
import SignInPage from "../pages/signInPage"
import DashboardPage from "../pages/dashboardPage"

const signInPage = new SignInPage
const dashboardPage = new DashboardPage

describe('Transfer History Visualization', () => {
    it("User has a transfer history - Should show the user's transfer history correctly", () => {
        signInPage.accessSignInPage()
        signInPage.checkSignInPage()
        signInPage.signInWithAnyUser(userData.userData.username, "s3cret")

        dashboardPage.checkDashboardPage()
        dashboardPage.checkTransactionList()
    })

    it("User doesn't have transfer history - Should show a message saying the user hasn't made any previous transfers", () => {
        signInPage.accessSignInPage()
        signInPage.checkSignInPage()
        signInPage.signInWithAnyUser(userData.userData.username, "s3cret")

        dashboardPage.checkDashboardPage()
        dashboardPage.selectCurrentDateTransaction()
        dashboardPage.checkEmptyList()
    })
})

