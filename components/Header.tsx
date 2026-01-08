'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FiSearch, FiShoppingCart } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { api } from '@/lib/api'

export default function Header() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    // Fetch cart count
    api.getCart()
      .then(data => {
        if (data.items) {
          const total = data.items.reduce((sum: number, item: any) => sum + item.quantity, 0)
          setCartCount(total)
        }
      })
      .catch(console.error)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/?search=${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <header className="bg-[#131921] text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4 py-2">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white hover:opacity-80 transition-opacity whitespace-nowrap">
            amazon
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 max-w-2xl">
            <div className="flex h-10">
              <select className="bg-[#F3F3F3] text-[#0F1111] text-xs px-2 rounded-l-md border-r border-gray-400 focus:outline-none">
                <option>All</option>
              </select>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search Amazon"
                className="flex-1 px-4 py-2 text-[#0F1111] focus:outline-none border-0"
              />
              <button
                type="submit"
                className="bg-[#FEBE69] hover:bg-[#F3A847] px-4 py-2 rounded-r-md transition-colors"
              >
                <FiSearch className="text-xl text-[#131921]" />
              </button>
            </div>
          </form>

          {/* Account & Orders */}
          <div className="flex items-center gap-4">
            <Link href="/account" className="text-xs hover:opacity-80 transition-opacity px-2">
              <div className="flex flex-col">
                <span className="text-[#CCCCCC]">Hello, sign in</span>
                <span className="font-semibold text-sm">Account & Lists</span>
              </div>
            </Link>

            <Link href="/orders" className="text-xs hover:opacity-80 transition-opacity px-2">
              <div className="flex flex-col">
                <span className="text-[#CCCCCC]">Returns</span>
                <span className="font-semibold text-sm">& Orders</span>
              </div>
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-end gap-1 hover:opacity-80 transition-opacity relative px-2 py-1"
            >
              <div className="flex flex-col items-end">
                <span className="text-xs text-[#CCCCCC]">Cart</span>
                <span className="text-sm font-bold">{cartCount}</span>
              </div>
              <FiShoppingCart className="text-3xl" />
            </Link>
          </div>
        </div>
      </div>
      {/* Secondary Navigation */}
      <div className="bg-[#232F3E] text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 py-2 text-sm overflow-x-auto">
            <Link href="/" className="flex items-center gap-1 hover:opacity-80 px-2 py-1 whitespace-nowrap">
              <span>All</span>
            </Link>
            <Link href="/?category=all" className="hover:opacity-80 px-2 py-1 whitespace-nowrap">Today's Deals</Link>
            <Link href="/?category=all" className="hover:opacity-80 px-2 py-1 whitespace-nowrap">Customer Service</Link>
            <Link href="/?category=all" className="hover:opacity-80 px-2 py-1 whitespace-nowrap">Registry</Link>
            <Link href="/?category=all" className="hover:opacity-80 px-2 py-1 whitespace-nowrap">Gift Cards</Link>
            <Link href="/sell" className="hover:opacity-80 px-2 py-1 whitespace-nowrap">Sell</Link>
          </div>
        </div>
      </div>
    </header>
  )
}

