export default function AdsPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Interest-Based Ads</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p>
              We use interest-based advertising to show you ads that are more relevant to your interests. 
              This helps us provide you with a better shopping experience.
            </p>
            <p className="font-semibold">How Interest-Based Ads Work</p>
            <p>
              When you visit our website, we may use cookies and similar technologies to collect 
              information about your browsing behavior. This information helps us show you ads 
              for products you might be interested in.
            </p>
            <p className="font-semibold">Your Choices</p>
            <p>
              You can opt out of interest-based advertising by adjusting your browser settings 
              or by visiting the opt-out pages of our advertising partners.
            </p>
            <p className="font-semibold">Third-Party Advertisers</p>
            <p>
              We work with third-party advertising companies that may use information about your 
              visits to our website to provide advertisements about goods and services of interest to you.
            </p>
            <p>
              If you have questions about our advertising practices, please contact us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

