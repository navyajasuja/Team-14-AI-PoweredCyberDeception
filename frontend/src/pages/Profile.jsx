import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import DashboardNavbar from '../components/DashboardNavbar'
import { getUserProfile } from '../services/api'

function Profile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await getUserProfile('user@example.com')
        setProfile(data)
      } catch (err) {
        setError('Could not load profile. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />
        <main className="p-4 sm:p-6 bg-gray-50 flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-4">My Profile</h2>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-600 rounded-lg px-4 py-3">
              {error}
            </div>
          )}

          {!loading && !error && profile && (
            <div className="bg-white rounded-lg shadow p-6 max-w-md">
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-sm text-gray-500">Full Name</p>
                  <p className="text-gray-800 font-medium">{profile.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="text-gray-800 font-medium">{profile.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Account Number</p>
                  <p className="text-gray-800 font-medium">{profile.account_number}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Balance</p>
                  <p className="text-gray-800 font-medium">
                    ₹{profile.balance.toLocaleString('en-IN', { minimumFractionDigits: 2 })}
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default Profile