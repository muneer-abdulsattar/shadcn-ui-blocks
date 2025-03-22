import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BuildingIcon, StoreIcon, UserRoundIcon } from "lucide-react";

export default function AvatarFallbackDemo() {
  return (
    <div className="grid gap-5">
      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            C
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            CN
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <UserRoundIcon className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <BuildingIcon className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback className="bg-indigo-500/25 text-indigo-500">
            <StoreIcon className="h-5 w-5" />
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
