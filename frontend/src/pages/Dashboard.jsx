import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import AccountBalanceCard from '../components/AccountBalanceCard'
import TransactionsCard from '../components/TransactionsCard'

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <DashboardNavbar />
        <main className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <AccountBalanceCard />
          <TransactionsCard />
        </main>
      </div>
    </div>
  )
}

export default Dashboard