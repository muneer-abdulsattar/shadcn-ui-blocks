import {
  CircleDotIcon,
  CircleUserRoundIcon,
  CreditCardIcon,
  Home,
  InfoIcon,
  LoaderCircleIcon,
  LoaderIcon,
  MousePointerClickIcon,
  NotebookTabsIcon,
  PictureInPicture2Icon,
  RectangleHorizontalIcon,
  Rows3Icon,
  SeparatorHorizontalIcon,
  SlidersHorizontalIcon,
  SquareCheckIcon,
  SquareChevronUpIcon,
  Table2Icon,
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
    label: "Components",
    items: [
      {
        title: "Accordion",
        url: "/components/accordion",
        icon: SquareChevronUpIcon,
        blockName: "accordion",
      },
      {
        title: "Alert",
        url: "/components/alert",
        icon: TriangleAlertIcon,
        blockName: "alert",
      },
      {
        title: "Avatar",
        url: "/components/avatar",
        icon: CircleUserRoundIcon,
        blockName: "avatar",
      },
      {
        title: "Badge",
        url: "/components/badge",
        icon: RectangleHorizontalIcon,
        blockName: "badge",
      },
      {
        title: "Button",
        url: "/components/button",
        icon: MousePointerClickIcon,
        blockName: "button",
      },
      {
        title: "Card",
        url: "/components/card",
        icon: CreditCardIcon,
        blockName: "card",
      },
      {
        title: "Checkbox",
        url: "/components/checkbox",
        icon: SquareCheckIcon,
        blockName: "checkbox",
      },
      {
        title: "Input",
        url: "/components/input",
        icon: TextCursorInputIcon,
        blockName: "input",
      },
      {
        title: "Progress",
        url: "/components/progress",
        icon: LoaderCircleIcon,
        blockName: "progress",
      },
      {
        title: "Radio Group",
        url: "/components/radio-group",
        icon: CircleDotIcon,
        blockName: "radio-group",
      },
      {
        title: "Select",
        url: "/components/select",
        icon: Rows3Icon,
        blockName: "select",
      },
      {
        title: "Separator",
        url: "/components/separator",
        icon: SeparatorHorizontalIcon,
        blockName: "separator",
      },
      {
        title: "Slider",
        url: "/components/slider",
        icon: SlidersHorizontalIcon,
        blockName: "slider",
      },
      {
        title: "Spinner",
        url: "/components/spinner",
        icon: LoaderIcon,
        blockName: "spinner",
      },
      {
        title: "Switch",
        url: "/components/switch",
        icon: ToggleRightIcon,
        blockName: "switch",
      },
      {
        title: "Table",
        url: "/components/table",
        icon: Table2Icon,
        blockName: "table",
      },
      {
        title: "Tabs",
        url: "/components/tabs",
        icon: NotebookTabsIcon,
        blockName: "tabs",
      },
      {
        title: "Textarea",
        url: "/components/textarea",
        icon: TextCursorInputIcon,
        blockName: "textarea",
      },
      {
        title: "Toast",
        url: "/components/toast",
        icon: PictureInPicture2Icon,
        blockName: "toast",
      },
      {
        title: "Tooltip",
        url: "/components/tooltip",
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
