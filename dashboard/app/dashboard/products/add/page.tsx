"use client"
import Image from "next/image"
import Link from "next/link"
import {
    ChevronLeft,
    PlusCircle,
    Upload,
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import {
    DialogContent,
    DialogClose,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogOverlay,
    DialogTrigger,
    DialogTitle,
    Dialog
} from "@/components/ui/dialog"

import CustomModal from "@/components/containers/custom-modal"

import { useState } from "react"


export default function AddPage() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen(!isModalOpen);
    const handleSubmit = () => {
        console.log('Form submitted');
        toggleModal();
    };

    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4">
                <div className="flex w-full justify-between items-center">
                    <Button className="flex items-center gap-2" variant="secondary" >
                        <Link href="/dashboard/products" legacyBehavior>
                            <a className="flex items-center gap-1">
                                <ChevronLeft className="h-4 w-4" />
                                <span>Back to Products</span>
                            </a>
                        </Link>
                    </Button>
                    <div className="flex items-center justify-center gap-2">
                        <Button size="sm">Save Product</Button>
                    </div>
                </div>
                <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Details</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            className="w-full"
                                            placeholder="Enter product name"
                                        />
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="description">Description</Label>
                                        <Textarea
                                            id="description"
                                            className="min-h-32"
                                            placeholder="Enter product description"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Stock</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead className="w-[100px]">SKU</TableHead>
                                            <TableHead>Stock</TableHead>
                                            <TableHead>Price</TableHead>
                                            <TableHead className="w-[100px]">Size</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>

                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter className="justify-center border-t p-4">
                                <Dialog  >
                                    <DialogTrigger asChild>
                                        <Button size="sm" variant="ghost" className="gap-1">
                                            <PlusCircle className="h-3.5 w-3.5" />
                                            Add Stock
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent className="flex flex-col gap-2">
                                        <DialogClose />
                                        <DialogHeader className="flex flex-col gap-2">
                                            <DialogTitle>Add Stock</DialogTitle>
                                            <DialogDescription>Add stock details</DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <div className="grid gap-3">
                                                <Label htmlFor="sku">SKU</Label>
                                                <Input
                                                    id="sku"
                                                    type="text"
                                                    className="w-full"
                                                    placeholder="Enter SKU"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="stock">Stock</Label>
                                                <Input
                                                    id="stock"
                                                    type="number"
                                                    className="w-full"
                                                    placeholder="Enter stock"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="price">Price</Label>
                                                <Input
                                                    id="price"
                                                    type="number"
                                                    className="w-full"
                                                    placeholder="Enter price"
                                                />
                                            </div>
                                            <div className="grid gap-3">
                                                <Label htmlFor="size">Size</Label>
                                                <Select>
                                                    <SelectTrigger id="size" aria-label="Select size">
                                                        <SelectValue placeholder="Select size" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="small">Small</SelectItem>
                                                        <SelectItem value="medium">Medium</SelectItem>
                                                        <SelectItem value="large">Large</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>
                                        <DialogFooter>
                                            <Button type="submit" variant="default" >Submit</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>

                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Category</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6 sm:grid-cols-3">
                                    <div className="grid gap-3">
                                        <Label htmlFor="category">Category</Label>
                                        <Select>
                                            <SelectTrigger
                                                id="category"
                                                aria-label="Select category"
                                            >
                                                <SelectValue placeholder="Select category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="clothing">Clothing</SelectItem>
                                                <SelectItem value="electronics">
                                                    Electronics
                                                </SelectItem>
                                                <SelectItem value="accessories">
                                                    Accessories
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="grid gap-3">
                                        <Label htmlFor="subcategory">
                                            Subcategory (optional)
                                        </Label>
                                        <Select>
                                            <SelectTrigger
                                                id="subcategory"
                                                aria-label="Select subcategory"
                                            >
                                                <SelectValue placeholder="Select subcategory" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="t-shirts">T-Shirts</SelectItem>
                                                <SelectItem value="hoodies">Hoodies</SelectItem>
                                                <SelectItem value="sweatshirts">
                                                    Sweatshirts
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                            </CardContent>

                        </Card>
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>Product Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-3">
                                        <Label htmlFor="status">Status</Label>
                                        <Select>
                                            <SelectTrigger id="status" aria-label="Select status">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="draft">Draft</SelectItem>
                                                <SelectItem value="published">Active</SelectItem>
                                                <SelectItem value="archived">Archived</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>Product Images</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-2">
                                    <Image
                                        alt="Product image"
                                        className="aspect-square w-full rounded-md object-cover hidden"
                                        height="300"
                                        src="/placeholder.svg"
                                        width="300"
                                    />
                                    <div className="grid grid-cols-3 gap-2">
                                        <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                                            <Upload className="h-4 w-4 text-muted-foreground" />
                                            <span className="sr-only">Upload</span>
                                        </button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Archive Product</CardTitle>
                                <CardDescription>
                                    Lipsum dolor sit amet, consectetur adipiscing elit.
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button size="sm" variant="secondary">
                                    Archive Product
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </main>


    )
}
