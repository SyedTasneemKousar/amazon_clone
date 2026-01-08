const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

export const api = {
  // Products
  getProducts: async (params?: { category?: string; search?: string }) => {
    const queryParams = new URLSearchParams()
    if (params?.category && params.category !== 'all') {
      queryParams.append('category', params.category)
    }
    if (params?.search) {
      queryParams.append('search', params.search)
    }
    const url = `${API_BASE_URL}/products${queryParams.toString() ? '?' + queryParams.toString() : ''}`
    try {
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        throw new Error(`Failed to fetch products: ${res.status} ${res.statusText}`)
      }
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch (error: any) {
      console.error('Fetch error:', error)
      throw new Error(`Network error: ${error?.message || 'Failed to connect to backend'}`)
    }
  },

  getProduct: async (id: string) => {
    const res = await fetch(`${API_BASE_URL}/products/${id}`)
    return res.json()
  },

  getCategories: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/categories`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        throw new Error(`Failed to fetch categories: ${res.status} ${res.statusText}`)
      }
      const data = await res.json()
      return Array.isArray(data) ? data : []
    } catch (error: any) {
      console.error('Fetch categories error:', error)
      throw new Error(`Network error: ${error?.message || 'Failed to connect to backend'}`)
    }
  },

  // Cart
  getCart: async () => {
    const res = await fetch(`${API_BASE_URL}/cart`)
    return res.json()
  },

  addToCart: async (productId: string, quantity: number = 1) => {
    const res = await fetch(`${API_BASE_URL}/cart`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId, quantity }),
    })
    return res.json()
  },

  updateCartItem: async (itemId: string, quantity: number) => {
    const res = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ quantity }),
    })
    return res.json()
  },

  removeFromCart: async (itemId: string) => {
    const res = await fetch(`${API_BASE_URL}/cart/${itemId}`, {
      method: 'DELETE',
    })
    return res.json()
  },

  // Orders
  createOrder: async (orderData: {
    shippingName: string
    shippingAddress: string
    shippingCity: string
    shippingState: string
    shippingZip: string
    shippingPhone: string
  }) => {
    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData),
    })
    return res.json()
  },

  getOrders: async () => {
    const res = await fetch(`${API_BASE_URL}/orders`)
    return res.json()
  },

  getOrder: async (id: string) => {
    const res = await fetch(`${API_BASE_URL}/orders/${id}`)
    return res.json()
  },
}


