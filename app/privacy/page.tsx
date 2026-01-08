export default function PrivacyPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Privacy Notice</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p className="font-semibold">Last Updated: December 2024</p>
            <p>
              Your privacy is important to us. This Privacy Notice explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="font-semibold">Information We Collect</p>
            <p>
              We collect information that you provide directly to us, such as when you create 
              an account, make a purchase, or contact us for support.
            </p>
            <p className="font-semibold">How We Use Your Information</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders</li>
              <li>Improve our website and services</li>
              <li>Send you promotional offers (with your consent)</li>
            </ul>
            <p className="font-semibold">Information Security</p>
            <p>
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction.
            </p>
            <p className="font-semibold">Your Rights</p>
            <p>
              You have the right to access, update, or delete your personal information at any time. 
              Contact us if you wish to exercise these rights.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

