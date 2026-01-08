'use client'

import Link from 'next/link'
import Image from 'next/image'
import { FiStar } from 'react-icons/fi'
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

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    try {
      await api.addToCart(product.id, 1)
      // Show success message without reload
      const button = e.currentTarget
      const originalText = button.textContent
      button.textContent = '✓ Added'
      button.classList.add('bg-[#008296]', 'hover:bg-[#006c7d]', 'border-[#008296]')
      button.classList.remove('bg-[#FFD814]', 'hover:bg-[#F7CA00]', 'border-[#FCD200]')
      
      setTimeout(() => {
        button.textContent = originalText
        button.classList.remove('bg-[#008296]', 'hover:bg-[#006c7d]', 'border-[#008296]')
        button.classList.add('bg-[#FFD814]', 'hover:bg-[#F7CA00]', 'border-[#FCD200]')
      }, 2000)
    } catch (error: any) {
      console.error('Error adding to cart:', error)
      alert(error.message || 'Failed to add product to cart')
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-sm p-4 h-full flex flex-col hover:shadow-md transition-shadow">
      <Link href={`/product/${product.id}`} className="flex-1 flex flex-col">
        <div className="relative w-full h-48 mb-3 bg-white flex items-center justify-center overflow-hidden">
          <Image
            src={product.images[0] || 'https://via.placeholder.com/200'}
            alt={product.name}
            width={200}
            height={200}
            className="object-contain max-h-full max-w-full p-2"
            unoptimized
          />
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm font-normal text-[#0F1111] mb-2 line-clamp-2 hover:text-[#C7511F] cursor-pointer">
            {product.name}
          </h3>
          
          <div className="flex items-center gap-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`text-sm ${
                    i < Math.floor(product.rating)
                      ? 'text-[#FFA41C] fill-[#FFA41C]'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-[#007185] ml-1 hover:text-[#C7511F] cursor-pointer">
              {product.reviewCount}
            </span>
          </div>
          
          <div className="mt-auto">
            <p className="text-lg font-normal text-[#0F1111] mb-1">
              <span className="text-sm">$</span>
              {product.price.toFixed(2)}
            </p>
            {product.stock > 0 ? (
              <p className="text-xs text-[#007600] mb-3">In Stock</p>
            ) : (
              <p className="text-xs text-red-600 mb-3">Currently unavailable</p>
            )}
          </div>
        </div>
      </Link>
      
      <button
        onClick={handleAddToCart}
        disabled={product.stock === 0}
        className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-1.5 px-3 text-sm font-normal text-[#0F1111] disabled:bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-500 transition-colors"
      >
        Add to Cart
      </button>
    </div>
  )
}

