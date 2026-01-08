'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FiStar, FiShoppingCart, FiArrowLeft } from 'react-icons/fi'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { api } from '@/lib/api'

interface Product {
  id: string
  name: string
  description: string
  price: number
  images: string[]
  rating: number
  reviewCount: number
  stock: number
  category: {
    name: string
  }
}

interface ProductDetailProps {
  productId: string
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const router = useRouter()
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    fetchProduct()
  }, [productId])

  const fetchProduct = async () => {
    try {
      const data = await api.getProduct(productId)
      setProduct(data)
    } catch (error) {
      console.error('Error fetching product:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddToCart = async () => {
    if (!product) return

    try {
      await api.addToCart(product.id, quantity)
      alert('Product added to cart!')
    } catch (error: any) {
      alert(error.message || 'Failed to add product to cart')
    }
  }

  const handleBuyNow = async () => {
    if (!product) return

    try {
      await api.addToCart(product.id, quantity)
      router.push('/checkout')
    } catch (error: any) {
      alert(error.message || 'Failed to add product to cart')
    }
  }

  if (loading) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading product...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-red-600 mb-4">Product not found</p>
            <button
              onClick={() => router.push('/')}
              className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-6 text-sm font-normal text-[#0F1111]"
            >
              <FiArrowLeft className="inline mr-2" />
              Back to Products
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <button
          onClick={() => router.push('/')}
          className="mb-4 text-[#007185] hover:text-[#C7511F] text-sm flex items-center gap-1"
        >
          <FiArrowLeft />
          Back to results
        </button>

        <div className="bg-white rounded-sm p-4 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Carousel */}
          <div>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              className="h-96"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={image || '/placeholder.png'}
                      alt={`${product.name} - Image ${index + 1}`}
                      width={500}
                      height={500}
                      className="object-contain max-h-full max-w-full p-4"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-2xl font-normal text-[#0F1111] mb-2">{product.name}</h1>

            <div className="flex items-center gap-2 mb-3">
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
              <span className="text-sm text-[#007185] hover:text-[#C7511F] cursor-pointer">
                {product.rating} ({product.reviewCount})
              </span>
            </div>

            <div className="border-t border-b border-gray-200 py-3 my-4">
              <p className="text-2xl font-normal text-[#0F1111] mb-1">
                <span className="text-sm">$</span>
                {product.price.toFixed(2)}
              </p>
              {product.stock > 0 ? (
                <p className="text-sm text-[#007600] font-normal">In Stock</p>
              ) : (
                <p className="text-sm text-red-600 font-normal">Currently unavailable</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-sm font-normal text-[#0F1111]">Quantity:</label>
              <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                className="border border-gray-400 rounded-sm px-3 py-1.5 text-sm bg-white"
                disabled={product.stock === 0}
              >
                {[...Array(Math.min(product.stock, 10))].map((_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex gap-3 mb-4">
              <button
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="flex-1 bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 text-sm font-normal text-[#0F1111] disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <FiShoppingCart />
                Add to Cart
              </button>
              <button
                onClick={handleBuyNow}
                disabled={product.stock === 0}
                className="flex-1 bg-[#FFA41C] hover:bg-[#FA8900] border border-[#FF8F00] rounded-md py-2 text-sm font-normal text-[#0F1111] disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            <div className="mt-4 p-4 bg-[#F7FAFA] rounded-sm border border-gray-200">
              <h3 className="font-semibold text-sm text-[#0F1111] mb-2">Product Details</h3>
              <p className="text-xs text-[#0F1111] mb-1">
                <span className="font-semibold">Category:</span> {product.category.name}
              </p>
              <p className="text-xs text-[#0F1111]">
                <span className="font-semibold">Stock Available:</span> {product.stock} units
              </p>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="mt-4 border-t border-gray-200 pt-4">
          <h2 className="text-lg font-semibold text-[#0F1111] mb-3">About this item</h2>
          <p className="text-sm text-[#0F1111] whitespace-pre-line leading-relaxed">{product.description}</p>
        </div>
        </div>
      </div>
    </div>
  )
}


