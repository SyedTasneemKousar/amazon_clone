'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
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
  status: string
  createdAt: string
  items: OrderItem[]
}

export default function OrderHistory() {
  const router = useRouter()
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchOrders()
  }, [])

  const fetchOrders = async () => {
    try {
      const data = await api.getOrders()
      setOrders(data)
    } catch (error) {
      console.error('Error fetching orders:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-[#EAEDED] min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111]">Loading orders...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#EAEDED] min-h-screen">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-2xl font-normal text-[#0F1111] mb-4">Your Orders</h1>

        {orders.length === 0 ? (
          <div className="bg-white rounded-sm p-12 text-center">
            <p className="text-lg text-[#0F1111] mb-4">You have no orders yet</p>
            <Link
              href="/"
              className="bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-md py-2 px-6 text-sm font-normal text-[#0F1111] inline-block"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white rounded-sm p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 pb-4 border-b border-gray-200">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm text-[#565959]">Order Placed</span>
                      <span className="text-sm font-semibold text-[#0F1111]">
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-sm text-[#565959]">Total</span>
                      <span className="text-sm font-semibold text-[#0F1111]">
                        ${order.totalAmount.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-[#565959]">Order ID</span>
                      <span className="text-sm text-[#007185] hover:text-[#C7511F] cursor-pointer">
                        {order.id}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <Link
                      href={`/order-confirmation/${order.id}`}
                      className="text-sm text-[#007185] hover:text-[#C7511F] hover:underline"
                    >
                      View Order Details
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="relative w-24 h-24 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
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
                        <Link
                          href={`/product/${item.product.id}`}
                          className="text-sm font-normal text-[#007185] hover:text-[#C7511F] hover:underline mb-1 block"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-xs text-[#565959] mb-1">Quantity: {item.quantity}</p>
                        <p className="text-sm font-semibold text-[#0F1111]">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className="text-sm text-[#007600] font-normal capitalize">
                          {order.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

