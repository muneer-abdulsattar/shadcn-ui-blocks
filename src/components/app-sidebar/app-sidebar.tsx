import { ShapesIcon } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
} from "@/components/ui/sidebar";
import Link from "next/link";
import AppSidebarMenuItem from "./sidebar-menu-item";
import { groups } from "@/description/app-sidebar";

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 border-b">
        <Link href="/">
          <div className="flex items-center font-bold gap-2">
            <ShapesIcon className="h-5 w-5" />
            Shadcn UI Blocks
          </div>
        </Link>
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
