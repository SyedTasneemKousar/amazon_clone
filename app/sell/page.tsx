export default function SellPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Sell Products</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p>
              Start selling your products on our platform and reach millions of customers. 
              Join thousands of sellers who are growing their business with us.
            </p>
            <p className="font-semibold">Benefits of Selling with Us:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Reach a large customer base</li>
              <li>Easy product listing and management</li>
              <li>Secure payment processing</li>
              <li>Marketing and promotional tools</li>
              <li>24/7 seller support</li>
            </ul>
            <p>
              To get started, simply create a seller account and begin listing your products. 
              Our team will guide you through the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

