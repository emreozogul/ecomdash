"use client";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";
import { Button } from "../ui/button"
import {
    Home,
    LineChart,
    Package,
    Package2,
    Settings,
    ShoppingCart,
    PanelLeft,
    Users2,
} from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";


const MENU_ITEMS = [
    {
        icon: Home,
        label: "Home",
        href: "/dashboard",
    },
    {
        icon: ShoppingCart,
        label: "Orders",
        href: "/dashboard/orders",
    },
    {
        icon: Package,
        label: "Products",
        href: "/dashboard/products",
    },
    {
        icon: Users2,
        label: "Customers",
        href: "/dashboard/customers",
    },
    {
        icon: LineChart,
        label: "Analytics",
        href: "/dashboard/analytics",
    },
    {
        icon: Settings,
        label: "Settings",
        href: "/dashboard/settings",
    },
]


export default function Header() {
    const pathname = usePathname();
    const paths = pathname.split("/").filter(Boolean);

    const BreadcrumbContainer = () => {
        if (paths.length > 1 && paths[paths.length - 1] !== "settings") {
            return (
                <Breadcrumb className="hidden md:flex">
                    <BreadcrumbList>
                        {paths.map((path, index) => (
                            <Fragment key={path + "-" + index}>
                                {index > 0 && <BreadcrumbSeparator />}
                                <BreadcrumbItem>
                                    {index === paths.length - 1 ? (
                                        <BreadcrumbPage>{path.charAt(0).toUpperCase() + path.slice(1)}</BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink>
                                            {path.charAt(0).toUpperCase() + path.slice(1)}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                            </Fragment>
                        ))}
                    </BreadcrumbList>
                </Breadcrumb>
            )
        }
        return null;
    }

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet>
                <SheetTrigger asChild>
                    <Button size="icon" variant="outline" className="sm:hidden">
                        <PanelLeft className="h-5 w-5" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="sm:max-w-xs">
                    <nav className="grid gap-6 text-lg font-medium">
                        {MENU_ITEMS.map((item, index) => (
                            <Link key={index} href={item.href} className={`flex items-center gap-2 p-3 rounded-lg ${pathname === item.href ? "bg-primary-foreground text-primary" : "text-muted-foreground"}`}>
                                <item.icon className="h-5 w-5" />
                                <span>{item.label}</span>

                            </Link>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
            <BreadcrumbContainer />
        </header>
    );
}