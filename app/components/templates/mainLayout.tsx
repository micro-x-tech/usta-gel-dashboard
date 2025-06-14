import { Outlet } from "react-router";
import { AppSidebar } from "~/components/organisms/appSidebar";
import { SidebarInset, SidebarProvider } from "~/components/atoms/sidebar";
import AppHeader from "../organisms/appHeader";

export default function MainLayout() {
  return (
    <div className="[--header-height:calc(--spacing(16))]">
      <SidebarProvider className="flex flex-col">
        <AppHeader />

        <div className="flex flex-1">
          <AppSidebar />

          <SidebarInset className="px-6 pt-6">
            <Outlet />
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
