import userData from "../fixtures/users/userData.json"
import TransactionPage from "../pages/transactionPage"
import DashboardPage from "../pages/dashboardPage"
import SignInPage from "../pages/signInPage"

const transactionPage = new TransactionPage
const dashboardPage = new DashboardPage
const signInPage = new SignInPage

describe('Real World App Transaction', () => {
  
    it('Successful Money Transfer - ', () => {
      signInPage.accessSignInPage()
      signInPage.checkSignInPage()
      signInPage.signInWithAnyUser(userData.userData.username, "s3cret")

      dashboardPage.checkDashboardPage()
      dashboardPage.accessTransactionPage()

      transactionPage.checkTransactionPage()
      transactionPage.chooseContact()
      transactionPage.fillMoneyTransactionForm(100, "Teste", userData.userData.balance)
    })

    //There should be an error message on the website each time the user tries to make a transfer beyond their limits, but it doesn't exist. The dev team should resolve that.
    //it('Failed Money Transfer', () =>{})
})