export default function PressPage() {
  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-sm p-8 max-w-4xl mx-auto">
          <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Press Releases</h1>
          <div className="space-y-6 text-sm text-[#0F1111]">
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Latest News</h2>
              <p className="text-[#565959] mb-2">December 2024</p>
              <p>
                Amazon Clone launches new e-commerce platform with enhanced features 
                and improved user experience.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h2 className="font-semibold mb-2">Company Milestone</h2>
              <p className="text-[#565959] mb-2">November 2024</p>
              <p>
                We've reached 10,000+ products across multiple categories, 
                providing customers with more choices than ever.
              </p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Platform Update</h2>
              <p className="text-[#565959] mb-2">October 2024</p>
              <p>
                New features added including advanced search, category filters, 
                and improved checkout process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

