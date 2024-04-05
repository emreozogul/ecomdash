import { OrderDetailsProps } from '../types/order-details';


export const mockOrderDetailsList: OrderDetailsProps[] = [
    {
        orderID: 'ORD12345678',
        orderDetails: {
            date: '2024-04-05',
            currency: 'USD',
            status: 'Fullfilled',
            product: [
                {
                    productID: 'PROD001',
                    name: 'Wireless Mouse',
                    quantity: 2,
                    price: 29.99,
                },
                {
                    productID: 'PROD002',
                    name: 'Mechanical Keyboard',
                    quantity: 1,
                    price: 119.99,
                },
            ],
            subtotal: 179.97,
            shipping: 5.99,
            tax: 14.40,
            total: 200.36,
            shippingInformation: {
                name: 'Jane Doe',
                address: '123 Elm Street',
                city: 'Anytown',
                state: 'CA',
                zip: '90001',
            },
            billingInformation: {
                isSameAsShipping: true,
            },
            customerInformation: {
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                phone: '555-1234',
            },
            paymentInformation: {
                type: 'Credit Card',
                cardNumber: '4111111111111111',
            },
        },
    },
    {
        orderID: 'ORD87654321',
        orderDetails: {
            date: '2024-04-06',
            currency: 'USD',
            status: 'Pending',
            product: [
                {
                    productID: 'PROD003',
                    name: 'Gaming Headset',
                    quantity: 1,
                    price: 79.99,
                },
            ],
            subtotal: 79.99,
            shipping: 0.00, // Free shipping promotion
            tax: 6.40,
            total: 86.39,
            shippingInformation: {
                name: 'John Smith',
                address: '456 Oak Lane',
                city: 'Sometown',
                state: 'TX',
                zip: '75001',
            },
            billingInformation: {
                isSameAsShipping: false,
                name: 'John Smith',
                address: '789 Pine Road',
                city: 'Othertown',
                state: 'TX',
                zip: '75002',
            },
            customerInformation: {
                name: 'John Smith',
                email: 'john.smith@example.com',
                phone: '555-6789',
            },
            paymentInformation: {
                type: 'PayPal',
                cardNumber: '', // Not applicable for PayPal
            },
        },
    },
    {
        orderID: 'ORD19283746',
        orderDetails: {
            date: '2024-04-07',
            currency: 'EUR',
            status: 'Refunded',
            product: [
                {
                    productID: 'PROD004',
                    name: 'Bluetooth Speaker',
                    quantity: 3,
                    price: 45.00,
                },
                {
                    productID: 'PROD005',
                    name: 'Smart Watch',
                    quantity: 1,
                    price: 199.99,
                },
            ],
            subtotal: 334.99,
            shipping: 10.00,
            tax: 33.50,
            total: 378.49,
            shippingInformation: {
                name: 'Alice Wonderland',
                address: '123 Wonderland Ave',
                city: 'Dreamtown',
                state: 'Fantasy',
                zip: '99999',
            },
            billingInformation: {
                isSameAsShipping: true,
            },
            customerInformation: {
                name: 'Alice Wonderland',
                email: 'alice.wonderland@example.com',
                phone: '555-1122',
            },
            paymentInformation: {
                type: 'Debit Card',
                cardNumber: '6222222222222222',
            },
        },
    }, {
        orderID: 'ORD19283746',
        orderDetails: {
            date: '2024-04-07',
            currency: 'EUR',
            status: 'Refunded', // Added status to match your structure
            product: [
                {
                    productID: 'PROD004',
                    name: 'Bluetooth Speaker',
                    quantity: 3,
                    price: 45.00,
                },
                {
                    productID: 'PROD005',
                    name: 'Smart Watch',
                    quantity: 1,
                    price: 199.99,
                },
            ],
            subtotal: 334.99,
            shipping: 10.00,
            tax: 33.50,
            total: 378.49,
            shippingInformation: {
                name: 'Alice Wonderland',
                address: '123 Wonderland Ave',
                city: 'Dreamtown',
                state: 'Fantasy',
                zip: '99999',
            },
            billingInformation: {
                isSameAsShipping: true,
            },
            customerInformation: {
                name: 'Alice Wonderland',
                email: 'alice.wonderland@example.com',
                phone: '555-1122',
            },
            paymentInformation: {
                type: 'Debit Card',
                cardNumber: '6222222222222222',
            },
        },
    },
    // Adding new mock orders
    {
        orderID: 'ORD94857621',
        orderDetails: {
            date: '2024-04-10',
            currency: 'USD',
            status: 'Fullfilled',
            product: [
                {
                    productID: 'PROD006',
                    name: 'Laptop Sleeve',
                    quantity: 2,
                    price: 25.50,
                },
                {
                    productID: 'PROD007',
                    name: 'External Hard Drive',
                    quantity: 1,
                    price: 120.00,
                },
            ],
            subtotal: 171.00,
            shipping: 0.00, // Free shipping promotion
            tax: 13.68,
            total: 184.68,
            shippingInformation: {
                name: 'Bob Builder',
                address: '456 Construction Rd',
                city: 'Buildcity',
                state: 'Work',
                zip: '12345',
            },
            billingInformation: {
                isSameAsShipping: false,
                name: 'Bob Builder',
                address: '789 Tool St',
                city: 'Makertown',
                state: 'Craft',
                zip: '54321',
            },
            customerInformation: {
                name: 'Bob Builder',
                email: 'bob.builder@example.com',
                phone: '555-6789',
            },
            paymentInformation: {
                type: 'Credit Card',
                cardNumber: '5555444433331111',
            },
        },
    },
    {
        orderID: 'ORD56789012',
        orderDetails: {
            date: '2024-04-15',
            currency: 'GBP',
            status: 'Pending',
            product: [
                {
                    productID: 'PROD008',
                    name: 'Fitness Tracker',
                    quantity: 1,
                    price: 99.99,
                },
                {
                    productID: 'PROD009',
                    name: 'Wireless Earbuds',
                    quantity: 2,
                    price: 59.99,
                },
            ],
            subtotal: 219.97,
            shipping: 5.99,
            tax: 22.00,
            total: 247.96,
            shippingInformation: {
                name: 'Charlie Day',
                address: '123 Sunny Street',
                city: 'Philadelphia',
                state: 'PA',
                zip: '19103',
            },
            billingInformation: {
                isSameAsShipping: true,
            },
            customerInformation: {
                name: 'Charlie Day',
                email: 'charlie.day@example.com',
                phone: '555-1234',
            },
            paymentInformation: {
                type: 'Credit Card',
                cardNumber: '4444555566667777',
            },
        },
    },
];
