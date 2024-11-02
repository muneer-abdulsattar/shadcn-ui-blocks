import { Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const groups = [
  {
    label: "Getting Started",
    items: [
      {
        title: "Introduction",
        url: "/",
        icon: Home,
      },
    ],
  },
  {
    label: "Blocks",
    items: [
      {
        title: "Button",
        url: "/blocks/button",
        icon: Inbox,
      },
      {
        title: "Input",
        url: "/blocks/input",
        icon: Inbox,
      },
      {
        title: "Tabs",
        url: "/blocks/tabs",
        icon: Inbox,
      },
      {
        title: "Alert",
        url: "/blocks/alert",
        icon: Inbox,
      },
      {
        title: "Tooltip",
        url: "/blocks/tooltip",
        icon: Inbox,
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        {groups.map(({ label, items }) => (
          <SidebarGroup key={label}>
            <SidebarGroupLabel>{label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon />
                        <span className="font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
