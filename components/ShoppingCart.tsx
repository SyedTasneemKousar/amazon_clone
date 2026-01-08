'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'
import { api } from '@/lib/api'

interface CartItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    images: string[]
    stock: number
  }
}

interface CartData {
  items: CartItem[]
  subtotal: string
  total: string
}

export default function ShoppingCart() {
  const router = useRouter()
  const [cart, setCart] = useState<CartData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const data = await api.getCart()
      setCart(data)
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleUpdateQuantity = async (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return

    try {
      await api.updateCartItem(itemId, newQuantity)
      fetchCart()
    } catch (error: any) {
      alert(error.message || 'Failed to update quantity')
    }
  }

  const handleRemoveItem = async (itemId: string) => {
    if (!confirm('Remove this item from cart?')) return

    try {
      await api.removeFromCart(itemId)
      fetchCart()
    } catch (error) {
      alert('Failed to remove item')
    }
  }

  if (loading) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading cart...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-sm p-12 text-center">
            <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Your Amazon Cart is empty</h1>
            <p className="text-sm text-[#007185] mb-6">Shop today's deals</p>
            <button
              onClick={() => router.push('/')}
              className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-8 text-sm font-normal text-[#0F1111]"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Cart Items */}
          <div className="lg:col-span-8 space-y-4">
            {cart.items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-sm p-4 flex flex-col md:flex-row gap-4"
              >
                <div className="relative w-full md:w-32 h-32 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.product.images[0] || '/placeholder.png'}
                    alt={item.product.name}
                    width={120}
                    height={120}
                    className="object-contain max-h-full max-w-full p-2"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>

                <div className="flex-1">
                  <h3 className="text-base font-normal text-[#0F1111] mb-2 hover:text-[#C7511F] cursor-pointer">{item.product.name}</h3>
                  <p className="text-lg font-normal text-[#0F1111] mb-4">
                    <span className="text-sm">$</span>
                    {item.product.price.toFixed(2)}
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center border border-gray-300 rounded-sm">
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1 hover:bg-gray-100 text-[#0F1111]"
                        disabled={item.quantity <= 1}
                      >
                        <FiMinus />
                      </button>
                      <span className="px-3 py-1 min-w-[2rem] text-center text-sm text-[#0F1111]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1 hover:bg-gray-100 text-[#0F1111]"
                        disabled={item.quantity >= item.product.stock}
                      >
                        <FiPlus />
                      </button>
                    </div>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="text-[#007185] hover:text-[#C7511F] text-sm flex items-center gap-1"
                    >
                      <FiTrash2 />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-sm p-4 sticky top-4">
              <div className="text-base font-normal text-[#0F1111] mb-4">
                Subtotal ({cart.items.reduce((sum, item) => sum + item.quantity, 0)} items): 
                <span className="font-semibold ml-1">${cart.total}</span>
              </div>
              
              <button
                onClick={() => router.push('/checkout')}
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 text-sm font-normal text-[#0F1111] mb-2"
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


