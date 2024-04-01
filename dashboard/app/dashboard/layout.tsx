import Sidebar from "@/components/containers/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <Sidebar />
            {children}
        </div>
    )
}