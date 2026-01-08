export default function HelpPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Help & Customer Service</h1>
          <div className="space-y-6 text-sm text-[#0F1111]">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Frequently Asked Questions</h2>
              <div className="space-y-3 mt-3">
                <div>
                  <p className="font-semibold">How do I place an order?</p>
                  <p className="text-[#565959]">
                    Browse products, add items to your cart, and proceed to checkout. 
                    Fill in your shipping information and place your order.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">How can I track my order?</p>
                  <p className="text-[#565959]">
                    Once your order ships, you'll receive a tracking number via email.
                  </p>
                </div>
                <div>
                  <p className="font-semibold">What payment methods do you accept?</p>
                  <p className="text-[#565959]">
                    We accept all major credit cards and debit cards.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Contact Us</h2>
              <p className="text-[#565959]">
                Email: support@amazonclone.com<br />
                Phone: 1-800-AMAZON-CLONE<br />
                Hours: Monday-Friday, 9 AM - 6 PM EST
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

