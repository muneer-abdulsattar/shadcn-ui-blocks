import { BlockScreenSize } from "@/types/blocks";
import { DesktopIcon, MobileIcon } from "@radix-ui/react-icons";
import { TabletIcon } from "lucide-react";

export const blockScreens = [
  {
    name: BlockScreenSize.mobile,
    icon: MobileIcon,
    size: 30,
  },
  {
    name: BlockScreenSize.tablet,
    icon: TabletIcon,
    size: 70,
  },
  {
    name: BlockScreenSize.desktop,
    icon: DesktopIcon,
    size: 100,
  },
];
