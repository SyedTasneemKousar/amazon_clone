export default function AffiliatePage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Become an Affiliate</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p>
              Join our affiliate program and earn commissions by promoting our products. 
              It's free to join and easy to get started.
            </p>
            <p className="font-semibold">How It Works:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Sign up for our affiliate program</li>
              <li>Get your unique affiliate links</li>
              <li>Share products with your audience</li>
              <li>Earn commissions on every sale</li>
            </ol>
            <p className="font-semibold">Commission Rates:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Electronics: 5% commission</li>
              <li>Clothing: 8% commission</li>
              <li>Books: 10% commission</li>
              <li>Home & Kitchen: 6% commission</li>
            </ul>
            <p>
              Start earning today by joining our affiliate program. 
              No upfront costs, no monthly fees.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

