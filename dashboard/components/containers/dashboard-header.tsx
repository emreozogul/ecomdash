"use client";
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../ui/breadcrumb";
import { Button } from "../ui/button"
import {
    Home,
    LineChart,
    Package,
    Package2,
    PanelLeft,
    ShoppingCart,
    Users2,
} from "lucide-react"

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

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
                        <Link
                            href="#"
                            className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:text-base"
                        >
                            <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
                            <span className="sr-only">Acme Inc</span>
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Home className="h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Orders
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-foreground"
                        >
                            <Package className="h-5 w-5" />
                            Products
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <Users2 className="h-5 w-5" />
                            Customers
                        </Link>
                        <Link
                            href="#"
                            className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
                        >
                            <LineChart className="h-5 w-5" />
                            Settings
                        </Link>
                    </nav>
                </SheetContent>
            </Sheet>
            <BreadcrumbContainer />
        </header>
    );
}