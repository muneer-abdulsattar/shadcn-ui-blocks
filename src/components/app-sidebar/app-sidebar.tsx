import {
  CreditCardIcon,
  Home,
  InfoIcon,
  LoaderCircleIcon,
  LoaderIcon,
  MousePointerClickIcon,
  NotebookTabsIcon,
  RectangleHorizontalIcon,
  SeparatorHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  TextCursorInputIcon,
  ToggleRightIcon,
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
        title: "Badge",
        url: "/blocks/badge",
        icon: RectangleHorizontalIcon,
        blockName: "badge",
      },
      {
        title: "Button",
        url: "/blocks/button",
        icon: MousePointerClickIcon,
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
        title: "Progress",
        url: "/blocks/progress",
        icon: LoaderCircleIcon,
        blockName: "progress",
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
        title: "Switch",
        url: "/blocks/switch",
        icon: ToggleRightIcon,
        blockName: "switch",
      },
      {
        title: "Tabs",
        url: "/blocks/tabs",
        icon: NotebookTabsIcon,
        blockName: "tabs",
      },
      {
        title: "Textarea",
        url: "/blocks/textarea",
        icon: TextCursorInputIcon,
        blockName: "textarea",
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
