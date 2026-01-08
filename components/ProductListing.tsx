'use client'

import { useEffect, useState, useCallback } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductCard from './ProductCard'
import { api } from '@/lib/api'

interface Product {
  id: string
  name: string
  price: number
  images: string[]
  rating: number
  reviewCount: number
  stock: number
  category: {
    name: string
  }
}

export default function ProductListing() {
  const searchParams = useSearchParams()
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [loading, setLoading] = useState(true)
  const searchQuery = searchParams.get('search') || ''

  const fetchProducts = useCallback(async () => {
    setLoading(true)
    try {
      const data = await api.getProducts({
        category: selectedCategory !== 'all' ? selectedCategory : undefined,
        search: searchQuery || undefined,
      })
      setProducts(Array.isArray(data) ? data : [])
    } catch (error: any) {
      console.error('Error fetching products:', error)
      setProducts([])
    } finally {
      setLoading(false)
    }
  }, [selectedCategory, searchQuery])

  useEffect(() => {
    // Fetch categories once
    api.getCategories()
      .then(data => {
        setCategories(Array.isArray(data) ? data : [])
      })
      .catch(err => {
        console.error('Error fetching categories:', err)
        setCategories([])
      })
  }, [])

  useEffect(() => {
    // Fetch products when filters change
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        {/* Filters */}
        <div className="bg-white mb-4 p-4 rounded-sm">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-sm font-semibold text-[#0F1111]">Filter by Category:</span>
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs rounded-sm border transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-[#FFD814] border-[#FCD200] text-[#0F1111]'
                  : 'bg-white border-gray-300 hover:bg-gray-50 text-[#0F1111]'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 py-1.5 text-xs rounded-sm border transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#FFD814] border-[#FCD200] text-[#0F1111]'
                    : 'bg-white border-gray-300 hover:bg-gray-50 text-[#0F1111]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading products...</p>
            <p className="text-sm text-[#565959] mt-2">Please ensure the backend server is running on port 5000</p>
          </div>
        ) : products.length === 0 ? (
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111] mb-2">No products found.</p>
            <p className="text-sm text-[#565959]">Make sure the database is seeded: <code className="bg-gray-100 px-2 py-1 rounded">npm run db:seed</code></p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

