"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, DropdownMenuCheckboxItem } from "@/components/ui/dropdown-menu"
import {
    DollarSign,
    Users,
    ListFilter,
    File,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import OrderDetails from "@/components/data/OrderDetails"
import { OrderDetailsProps } from "@/types/order-details"
import { mockOrderDetailsList } from "@/lib/mockdata"
import { useState } from "react"

export default function Page() {

    const [selectedOrderDetails, setSelectedOrderDetails] = useState(mockOrderDetailsList[0].orderDetails);
    const [selectedOrderID, setSelectedOrderID] = useState(mockOrderDetailsList[0].orderID);

    function loadOrderDetails(orderID: string, orderDetails: OrderDetailsProps["orderDetails"]) {
        setSelectedOrderID(orderID);
        setSelectedOrderDetails(orderDetails);
    }



    function BadgeType(status: string) {
        switch (status) {
            case 'Fullfilled':
                return <Badge variant="fullfilled">Fullfilled</Badge>
            case 'Pending':
                return <Badge variant="pending">Pending</Badge>
            case 'Refunded':
                return <Badge variant="refunded">Refunded</Badge>
            default:
                return <Badge variant="secondary">{status}</Badge>
        }
    }


    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
            <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
                <Tabs defaultValue="week">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="week">Week</TabsTrigger>
                            <TabsTrigger value="month">Month</TabsTrigger>
                            <TabsTrigger value="year">Year</TabsTrigger>
                        </TabsList>
                        <div className="ml-auto flex items-center gap-2">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="h-7 gap-1 text-sm"
                                    >
                                        <ListFilter className="h-3.5 w-3.5" />
                                        <span className="sr-only sm:not-sr-only">Filter</span>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuCheckboxItem checked>
                                        Fulfilled
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Declined
                                    </DropdownMenuCheckboxItem>
                                    <DropdownMenuCheckboxItem>
                                        Refunded
                                    </DropdownMenuCheckboxItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            <Button
                                size="sm"
                                variant="outline"
                                className="h-7 gap-1 text-sm"
                            >
                                <File className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Export</span>
                            </Button>
                        </div>
                    </div>
                    <TabsContent value="week">
                        <Card>
                            <CardHeader className="px-7">
                                <CardTitle>Orders</CardTitle>
                                <CardDescription>
                                    Recent orders from your store.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Customer</TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Type
                                            </TableHead>
                                            <TableHead className="hidden sm:table-cell">
                                                Status
                                            </TableHead>
                                            <TableHead className="hidden md:table-cell">
                                                Date
                                            </TableHead>
                                            <TableHead className="text-right">Amount</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {mockOrderDetailsList.map((order: OrderDetailsProps) => (
                                            <TableRow key={order.orderID} onClick={() => {
                                                loadOrderDetails(order.orderID, order.orderDetails)
                                            }}>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <Users className="h-5 w-5" />
                                                        <span>{order.orderDetails.customerInformation.name}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    <Badge variant="secondary">Online</Badge>
                                                </TableCell>
                                                <TableCell className="hidden sm:table-cell">
                                                    {BadgeType(order.orderDetails.status)}
                                                </TableCell>
                                                <TableCell className="hidden md:table-cell">
                                                    {order.orderDetails.date}
                                                </TableCell>
                                                <TableCell className="text-right">
                                                    <div className="flex items-center gap-1">
                                                        <DollarSign className="h-4 w-4" />
                                                        <span>{order.orderDetails.total}</span>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            <OrderDetails orderID={selectedOrderID} orderDetails={selectedOrderDetails} />
        </main>
    )

}