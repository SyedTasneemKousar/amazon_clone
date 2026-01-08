import { Suspense } from 'react'
import ProductListing from '@/components/ProductListing'

function ProductListingWrapper() {
  return <ProductListing />
}

export default function Home() {
  return (
    <Suspense fallback={
      <div className="bg-[#EAEDED] min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-sm p-8 text-center">
          <p className="text-lg text-[#0F1111]">Loading...</p>
        </div>
      </div>
    }>
      <ProductListingWrapper />
    </Suspense>
  )
}


