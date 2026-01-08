export default function ReturnsPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Returns</h1>
          <div className="space-y-4 text-sm text-[#0F1111] leading-relaxed">
            <p>
              We want you to be completely satisfied with your purchase. 
              If you're not happy with an item, you can return it within 30 days of delivery.
            </p>
            <p className="font-semibold">Return Policy:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>30-day return window from delivery date</li>
              <li>Items must be in original condition with tags attached</li>
              <li>Free returns on most items</li>
              <li>Refund processed within 5-7 business days</li>
            </ul>
            <p className="font-semibold">How to Return:</p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Go to your order history</li>
              <li>Select the item you want to return</li>
              <li>Print the return label</li>
              <li>Package the item and ship it back</li>
            </ol>
            <p>
              For assistance with returns, please contact our customer service team.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

