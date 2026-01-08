'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { FiCheckCircle, FiArrowLeft } from 'react-icons/fi'
import { api } from '@/lib/api'

interface OrderItem {
  id: string
  quantity: number
  price: number
  product: {
    id: string
    name: string
    images: string[]
  }
}

interface Order {
  id: string
  totalAmount: number
  shippingName: string
  shippingAddress: string
  shippingCity: string
  shippingState: string
  shippingZip: string
  shippingPhone: string
  status: string
  createdAt: string
  items: OrderItem[]
}

interface OrderConfirmationProps {
  orderId: string
}

export default function OrderConfirmation({ orderId }: OrderConfirmationProps) {
  const router = useRouter()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrder()
  }, [orderId])

  const fetchOrder = async () => {
    try {
      const data = await api.getOrder(orderId)
      setOrder(data)
    } catch (error) {
      console.error('Error fetching order:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading order...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!order) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-red-600 mb-4">Order not found</p>
            <button
              onClick={() => router.push('/')}
              className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-6 text-sm font-normal text-[#0F1111]"
            >
              <FiArrowLeft className="inline mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4 max-w-4xl">
        <div className="bg-white rounded-sm p-8 text-center mb-4">
          <FiCheckCircle className="text-[#007600] text-5xl mx-auto mb-4" />
          <h1 className="text-2xl font-normal text-[#0F1111] mb-2">Thank you for your order!</h1>
          <p className="text-sm text-[#0F1111] mb-4">We'll send you a confirmation email shortly</p>
          <div className="bg-[#F7FAFA] rounded-sm p-4 inline-block border border-gray-200">
            <p className="text-xs text-[#565959] mb-1">Order ID</p>
            <p className="text-base font-normal text-[#0F1111]">{order.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Order Details */}
          <div className="bg-white rounded-sm p-4">
            <h2 className="text-base font-semibold text-[#0F1111] mb-3">Order Details</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-[#0F1111]">
                <span className="text-[#565959]">Order Date:</span>
                <span>{new Date(order.createdAt).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between text-[#0F1111]">
                <span className="text-[#565959]">Status:</span>
                <span className="font-normal text-[#007600] capitalize">{order.status}</span>
              </div>
              <div className="flex justify-between text-[#0F1111]">
                <span className="text-[#565959]">Total Amount:</span>
                <span className="font-semibold text-base">
                  ${order.totalAmount.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-white rounded-sm p-4">
            <h2 className="text-base font-semibold text-[#0F1111] mb-3">Shipping Address</h2>
            <div className="text-sm text-[#0F1111]">
              <p className="font-normal">{order.shippingName}</p>
              <p>{order.shippingAddress}</p>
              <p>
                {order.shippingCity}, {order.shippingState} {order.shippingZip}
              </p>
              <p className="mt-2">Phone: {order.shippingPhone}</p>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-white rounded-sm p-4 mb-4">
          <h2 className="text-base font-semibold text-[#0F1111] mb-3">Order Items</h2>
          <div className="space-y-3">
            {order.items.map((item) => (
              <div key={item.id} className="flex gap-3 border-b border-gray-200 pb-3 last:border-0">
                <div className="relative w-20 h-20 bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={item.product.images[0] || '/placeholder.png'}
                    alt={item.product.name}
                    width={80}
                    height={80}
                    className="object-contain max-h-full max-w-full p-1"
                    style={{ maxWidth: '100%', maxHeight: '100%' }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-normal text-sm text-[#0F1111] mb-1">{item.product.name}</h3>
                  <p className="text-xs text-[#565959]">Quantity: {item.quantity}</p>
                  <p className="text-sm font-normal text-[#0F1111]">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
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


