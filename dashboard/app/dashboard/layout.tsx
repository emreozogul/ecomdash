import Sidebar from "@/components/containers/sidebar";
import Header from "@/components/containers/dashboard-header";
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Sidebar />
            < div className="flex min-h-screen w-full flex-col bg-muted/40" >
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
                    <Header />
                    {children}
                </div>
            </div >

        </div>
    )
}