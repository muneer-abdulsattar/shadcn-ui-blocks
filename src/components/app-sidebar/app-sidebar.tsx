import {
  CreditCardIcon,
  HandIcon,
  Home,
  InfoIcon,
  LoaderIcon,
  NotebookTabsIcon,
  SeparatorHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  TextCursorInputIcon,
  TriangleAlertIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from "@/components/ui/sidebar";
import AppSidebarMenuItem from "./sidebar-menu-item";

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
        title: "Accordion",
        url: "/blocks/accordion",
        icon: SquareChevronUpIcon,
        blockName: "accordion",
      },
      {
        title: "Alert",
        url: "/blocks/alert",
        icon: TriangleAlertIcon,
        blockName: "alert",
      },
      {
        title: "Button",
        url: "/blocks/button",
        icon: HandIcon,
        blockName: "button",
      },
      {
        title: "Card",
        url: "/blocks/card",
        icon: CreditCardIcon,
        blockName: "card",
      },
      {
        title: "Checkbox",
        url: "/blocks/checkbox",
        icon: SquareCheckIcon,
        blockName: "checkbox",
      },
      {
        title: "Input",
        url: "/blocks/input",
        icon: TextCursorInputIcon,
        blockName: "input",
      },
      {
        title: "Separator",
        url: "/blocks/separator",
        icon: SeparatorHorizontalIcon,
        blockName: "separator",
      },
      {
        title: "Spinner",
        url: "/blocks/spinner",
        icon: LoaderIcon,
        blockName: "spinner",
      },
      {
        title: "Tabs",
        url: "/blocks/tabs",
        icon: NotebookTabsIcon,
        blockName: "tabs",
      },
      {
        title: "Tooltip",
        url: "/blocks/tooltip",
        icon: InfoIcon,
        blockName: "tooltip",
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
