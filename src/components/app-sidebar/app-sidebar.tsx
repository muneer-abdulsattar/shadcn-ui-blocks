import { ShapesIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Link from "next/link";
import AppSidebarMenuItem from "./sidebar-menu-item";
import { groups } from "@/description/app-sidebar";

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="relative flex-row items-center justify-between p-4 group-data-[state=collapsed]:p-3 group-data-[state=collapsed]:justify-center border-b">
        <Link href="/">
          <div className="flex items-center font-bold gap-2">
            <ShapesIcon className="h-5 w-5" />
            <span className="group-data-[state=collapsed]:hidden whitespace-nowrap">
              Shadcn UI Blocks
            </span>
          </div>
        </Link>
        <SidebarTrigger className="group-data-[state=collapsed]:absolute group-data-[state=collapsed]:left-[calc(100%+0.2rem)]" />
      </SidebarHeader>
      <SidebarContent>
        {groups.map(({ label, items }) => (
          <SidebarGroup key={label}>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <AppSidebarMenuItem key={item.title} item={item} />
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
