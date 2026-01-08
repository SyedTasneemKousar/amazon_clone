import OrderConfirmation from '@/components/OrderConfirmation'

export default function OrderConfirmationPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <OrderConfirmation orderId={params.id} />
    </div>
  )
}


