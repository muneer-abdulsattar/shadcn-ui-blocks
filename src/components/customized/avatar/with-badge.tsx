import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarWithBadgeDemo() {
  return (
    <div className="relative">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="h-2.5 w-2.5 rounded-full bg-green-500 absolute bottom-0 right-0"></div>
    </div>
  );
}
