'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { api } from '@/lib/api'

interface CartItem {
  id: string
  quantity: number
  product: {
    id: string
    name: string
    price: number
    images: string[]
  }
}

interface CartData {
  items: CartItem[]
  subtotal: string
  total: string
}

export default function Checkout() {
  const router = useRouter()
  const [cart, setCart] = useState<CartData | null>(null)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    shippingName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
    shippingPhone: '',
  })

  useEffect(() => {
    fetchCart()
  }, [])

  const fetchCart = async () => {
    try {
      const data = await api.getCart()
      setCart(data)
      if (data.items.length === 0) {
        router.push('/cart')
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.shippingName || !formData.shippingAddress || !formData.shippingCity || 
        !formData.shippingState || !formData.shippingZip || !formData.shippingPhone) {
      alert('Please fill in all fields')
      return
    }

    setSubmitting(true)
    try {
      const order = await api.createOrder(formData)
      router.push(`/order-confirmation/${order.id}`)
    } catch (error: any) {
      alert(error.message || 'Failed to place order')
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!cart || cart.items.length === 0) {
    return null
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Shipping Form */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-sm p-6 mb-4">
              <h2 className="text-lg font-normal text-[#0F1111] mb-4">Shipping Address</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-1 text-sm font-normal text-[#0F1111]">Full Name *</label>
                <input
                  type="text"
                  name="shippingName"
                  value={formData.shippingName}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-normal text-[#0F1111]">Address *</label>
                <input
                  type="text"
                  name="shippingAddress"
                  value={formData.shippingAddress}
                  onChange={handleInputChange}
                  required
                  className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-normal text-[#0F1111]">City *</label>
                  <input
                    type="text"
                    name="shippingCity"
                    value={formData.shippingCity}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-normal text-[#0F1111]">State *</label>
                  <input
                    type="text"
                    name="shippingState"
                    value={formData.shippingState}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 text-sm font-normal text-[#0F1111]">ZIP Code *</label>
                  <input
                    type="text"
                    name="shippingZip"
                    value={formData.shippingZip}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-normal text-[#0F1111]">Phone *</label>
                  <input
                    type="tel"
                    name="shippingPhone"
                    value={formData.shippingPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-400 rounded-sm px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#FFD814]"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 text-sm font-normal text-[#0F1111] disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {submitting ? 'Placing Order...' : 'Place your order'}
              </button>
            </form>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
          <div className="bg-white rounded-sm p-4 sticky top-4">
            <h2 className="text-lg font-normal text-[#0F1111] mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
              {cart.items.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative w-16 h-16 bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src={item.product.images[0] || '/placeholder.png'}
                      alt={item.product.name}
                      width={60}
                      height={60}
                      className="object-contain max-h-full max-w-full p-1"
                      style={{ maxWidth: '100%', maxHeight: '100%' }}
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-normal text-[#0F1111] line-clamp-2">{item.product.name}</p>
                    <p className="text-xs text-[#565959]">Qty: {item.quantity}</p>
                    <p className="text-sm font-normal text-[#0F1111]">${(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-[#0F1111]">
                <span>Subtotal:</span>
                <span>${cart.subtotal}</span>
              </div>
              <div className="flex justify-between text-[#0F1111]">
                <span>Shipping:</span>
                <span className="text-[#007600]">Free</span>
              </div>
              <div className="border-t border-gray-200 pt-2 flex justify-between font-semibold text-base text-[#0F1111]">
                <span>Total:</span>
                <span>${cart.total}</span>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}


