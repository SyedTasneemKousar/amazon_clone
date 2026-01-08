import Link from 'next/link'

export default function AccountPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Your Account</h1>
          <div className="space-y-4 text-sm text-[#0F1111]">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Account Information</h2>
              <p className="text-[#565959]">
                Manage your account settings, view order history, and update your preferences.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Order History</h2>
              <p className="text-[#565959] mb-2">
                View all your past orders and track their status.
              </p>
              <Link
                href="/orders"
                className="text-[#007185] hover:text-[#C7511F] hover:underline"
              >
                View Your Orders →
              </Link>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Payment Methods</h2>
              <p className="text-[#565959]">
                Manage your saved payment methods and billing addresses.
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Addresses</h2>
              <p className="text-[#565959]">
                Update your shipping and billing addresses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

