'use client'

import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#131A22] text-gray-300 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Get to Know Us</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/about" className="hover:underline cursor-pointer">About Us</Link></li>
              <li><Link href="/careers" className="hover:underline cursor-pointer">Careers</Link></li>
              <li><Link href="/press" className="hover:underline cursor-pointer">Press Releases</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Make Money with Us</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/sell" className="hover:underline cursor-pointer">Sell products</Link></li>
              <li><Link href="/affiliate" className="hover:underline cursor-pointer">Become an Affiliate</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Let Us Help You</h3>
            <ul className="space-y-2 text-xs">
              <li><Link href="/account" className="hover:underline cursor-pointer">Your Account</Link></li>
              <li><Link href="/returns" className="hover:underline cursor-pointer">Returns</Link></li>
              <li><Link href="/help" className="hover:underline cursor-pointer">Help</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4 text-sm">Connect with Us</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Facebook</a></li>
              <li><span className="hover:underline cursor-pointer" onClick={(e) => e.preventDefault()}>Twitter</span></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#131A22] border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
            <div className="flex flex-wrap gap-4">
              <Link href="/conditions" className="hover:underline cursor-pointer">Conditions of Use</Link>
              <Link href="/privacy" className="hover:underline cursor-pointer">Privacy Notice</Link>
              <Link href="/ads" className="hover:underline cursor-pointer">Interest-Based Ads</Link>
            </div>
            <p className="text-gray-500">© {currentYear}, Amazon.com, Inc. or its affiliates</p>
          </div>
        </div>
      </div>
    </footer>
  )
}


