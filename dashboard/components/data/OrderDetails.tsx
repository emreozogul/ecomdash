
import {
    ChevronLeft,
    ChevronRight,
    Copy,
    CreditCard,
    MoreVertical,
    Truck,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator"

type OrderDetailsProps = {
    orderID: string
    orderDetails: {
        date: string
        currency: string
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


export default function OrderDetails({ orderID, orderDetails }: OrderDetailsProps) {
    return (
        <div >
            <Card className="overflow-hidden">
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            Order ID:<span>{orderID}</span>
                            <Button
                                size="icon"
                                variant="outline"
                                className="h-6 w-6 opacity-0 transition-opacity group-hover:opacity-100"
                            >
                                <Copy className="h-3 w-3" />
                                <span className="sr-only">Copy Order ID</span>
                            </Button>
                        </CardTitle>
                        <CardDescription>{orderDetails.date}</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <Button size="sm" variant="outline" className="h-8 gap-1">
                            <Truck className="h-3.5 w-3.5" />
                            <span className="lg:sr-only xl:not-sr-only xl:whitespace-nowrap">
                                Track Order
                            </span>
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="outline" className="h-8 w-8">
                                    <MoreVertical className="h-3.5 w-3.5" />
                                    <span className="sr-only">More</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Export</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Trash</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <div className="font-semibold">Order Details</div>
                        <ul className="grid gap-3">
                            {orderDetails.product.map((item) => (
                                <li key={item.name} className="flex items-center justify-between">
                                    <span>{item.name}</span>
                                    <span>
                                        {item.quantity} x ${item.price}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span>Subtotal</span>
                                <span>${orderDetails.subtotal}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Shipping</span>
                                <span>${orderDetails.shipping}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Tax</span>
                                <span>${orderDetails.tax}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span>Total</span>
                                <span>${orderDetails.total}</span>
                            </li>
                        </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid grid-cols-2 gap-4">
                        <div className="grid gap-3">
                            <div className="font-semibold">Shipping Information</div>
                            <address className="grid gap-0.5 not-italic text-muted-foreground">
                                <span>{orderDetails.shippingInformation.name}</span>
                                <span>{orderDetails.shippingInformation.address}</span>
                                <span>
                                    {orderDetails.shippingInformation.city},{" "}
                                    {orderDetails.shippingInformation.state}{" "}
                                    {orderDetails.shippingInformation.zip}
                                </span>
                            </address>
                        </div>
                        <div className="grid auto-rows-max gap-3">
                            <div className="font-semibold">Billing Information</div>
                            <div className="text-muted-foreground">
                                {orderDetails.billingInformation.isSameAsShipping
                                    ? <p>Same as Shipping</p>
                                    : (
                                        <address className="grid gap-0.5 not-italic">
                                            <span>{orderDetails.billingInformation.name}</span>
                                            <span>{orderDetails.billingInformation.address}</span>
                                            <span>
                                                {orderDetails.billingInformation.city},{" "}
                                                {orderDetails.billingInformation.state}{" "}
                                                {orderDetails.billingInformation.zip}
                                            </span>
                                        </address>
                                    )}
                            </div>
                        </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Customer Information</div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">Customer</dt>
                                <dd>{orderDetails.customerInformation.name}</dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">Email</dt>
                                <dd>
                                    <a href="mailto:">{orderDetails.customerInformation.email} </a>
                                </dd>
                            </div>
                            <div className="flex items-center justify-between">
                                <dt className="text-muted-foreground">Phone</dt>
                                <dd>
                                    <a href="tel:">{orderDetails.customerInformation.phone}</a>
                                </dd>
                            </div>
                        </dl>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Payment Information</div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="flex items-center gap-1 text-muted-foreground">
                                    <CreditCard className="h-4 w-4" />
                                    {orderDetails.paymentInformation.type}
                                </dt>
                                <dd>{orderDetails.paymentInformation.cardNumber}</dd>
                            </div>
                        </dl>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}