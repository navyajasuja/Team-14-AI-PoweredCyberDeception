import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'

const mockTransactions = [
  { id: 1, date: '2026-06-15', description: 'Grocery Store', type: 'Debit', amount: -850.40, status: 'Completed' },
  { id: 2, date: '2026-06-14', description: 'Salary Credit', type: 'Credit', amount: 32000.00, status: 'Completed' },
  { id: 3, date: '2026-06-13', description: 'Electricity Bill', type: 'Debit', amount: -1200.50, status: 'Completed' },
  { id: 4, date: '2026-06-12', description: 'Online Shopping', type: 'Debit', amount: -459.99, status: 'Pending' },
  { id: 5, date: '2026-06-11', description: 'ATM Withdrawal', type: 'Debit', amount: -2000.00, status: 'Completed' },
  { id: 6, date: '2026-06-10', description: 'Freelance Payment', type: 'Credit', amount: 15000.00, status: 'Completed' },
  { id: 7, date: '2026-06-09', description: 'Netflix Subscription', type: 'Debit', amount: -649.00, status: 'Completed' },
  { id: 8, date: '2026-06-08', description: 'Restaurant', type: 'Debit', amount: -1200.00, status: 'Completed' },
  { id: 9, date: '2026-06-07', description: 'Rent Payment', type: 'Debit', amount: -15000.00, status: 'Completed' },
  { id: 10, date: '2026-06-06', description: 'Interest Credit', type: 'Credit', amount: 320.75, status: 'Completed' },
]

function Transactions() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="p-4 sm:p-6 bg-gray-50 flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Transaction History</h2>

          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-brand-dark text-white">
                <tr>
                  <th className="text-left px-4 py-3">Date</th>
                  <th className="text-left px-4 py-3">Description</th>
                  <th className="text-left px-4 py-3">Type</th>
                  <th className="text-left px-4 py-3">Amount</th>
                  <th className="text-left px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {mockTransactions.map((tx, index) => (
                  <tr
                    key={tx.id}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 text-gray-600">{tx.date}</td>
                    <td className="px-4 py-3 text-gray-800 font-medium">{tx.description}</td>
                    <td className="px-4 py-3 text-gray-600">{tx.type}</td>
                    <td className={`px-4 py-3 font-semibold ${tx.amount < 0 ? 'text-red-500' : 'text-green-600'}`}>
                      {tx.amount < 0 ? '-' : '+'}₹{Math.abs(tx.amount).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${tx.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Transactions