import Navbar from '@/components/containers/navbar'
export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <h1 className="text-2xl font-semibold">Dashboard</h1>
                <p className="text-muted-foreground mt-2">
                    Welcome back, John Doe!
                </p>
            </main>

        </div>
    )
}