import { AppSidebar } from "@/components/app-sidebar";
import { Navbar } from "@/components/layout/navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-slate-100 dark:bg-gray-800">
      <div className="md:hidden">
        <Navbar />
      </div>
      <SidebarProvider>
        <AppSidebar />
        <main className="w-full p-10">{children}</main>
      </SidebarProvider>
    </div>
  );
}
