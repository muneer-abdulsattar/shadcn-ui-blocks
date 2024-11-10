import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

export default function ClickableAvatarDemo() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link href="https://github.com/shadcn" target="_blank">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </TooltipTrigger>
      <TooltipContent>shadcn</TooltipContent>
    </Tooltip>
  );
}
