import { getNumberOfFilesInsideDirectory } from "@/lib/file";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { SidebarMenuItem } from "../ui/sidebar";
import AppSidebarMenuButton from "./sidebar-menu-button";

interface SidebarItem {
  icon: LucideIcon;
  url: string;
  title: string;
  blockName?: string;
}

type AppSidebarMenuItemProps = React.ComponentProps<typeof SidebarMenuItem> & {
  item: SidebarItem;
};

const AppSidebarMenuItem = ({ item, ...props }: AppSidebarMenuItemProps) => {
  const fileCount = item.blockName
    ? getNumberOfFilesInsideDirectory(`src/components/blocks/${item.blockName}`)
    : null;

  return (
    <SidebarMenuItem {...props}>
      <AppSidebarMenuButton
        asChild
        url={item.url}
        className={cn(
          "group/menu-button gap-x-3 data-[active=true]:bg-blue-100 data-[active=true]:hover:bg-blue-100 data-[active=true]:text-foreground"
        )}
      >
        <Link href={item.url}>
          <item.icon />
          <span className="font-medium">{item.title}</span>
          {!!fileCount && (
            <Badge
              className={cn(
                "ml-auto py-0 px-1 rounded-full bg-foreground/5 group-data-[active=true]/menu-button:bg-foreground/10"
              )}
              variant="outline"
            >
              {fileCount}
            </Badge>
          )}
        </Link>
      </AppSidebarMenuButton>
    </SidebarMenuItem>
  );
};

export default AppSidebarMenuItem;
