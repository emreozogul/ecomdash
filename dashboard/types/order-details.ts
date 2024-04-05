export type OrderDetailsProps = {
    orderID: string
    orderDetails: {
        date: string
        currency: string
        status: string
        product: {
            productID: string
            name: string
            quantity: number
            price: number
        }[]
        subtotal: number
        shipping: number
        tax: number
        total: number
        shippingInformation: {
            name: string
            address: string
            city: string
            state: string
            zip: string
        }
        billingInformation: {
            isSameAsShipping: boolean
            name?: string
            address?: string
            city?: string
            state?: string
            zip?: string
        }
        customerInformation: {
            name: string
            email: string
            phone: string
        }
        paymentInformation: {
            type: string
            cardNumber: string
        }
    }

}