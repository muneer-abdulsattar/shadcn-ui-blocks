import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BanIcon, MoreHorizontalIcon } from "lucide-react";

const followers = [
  { username: "jane_doe", fullName: "Jane Doe" },
  { username: "tech_guru", fullName: "Alex Thompson" },
  { username: "nature_lover", fullName: "Emma Green" },
  { username: "photogirl", fullName: "Sophia Martinez" },
  { username: "code_master", fullName: "Liam Patel" },
];

const following = [
  { username: "startup_guy", fullName: "James Lee" },
  { username: "design_dreamer", fullName: "Mia Wilson" },
  { username: "art_addict", fullName: "Benjamin White" },
  { username: "web_wizard", fullName: "Lucas Nguyen" },
  { username: "health_nut", fullName: "Ella Singh" },
];

const UserList = ({ users }: { users: typeof following }) => (
  <div className="space-y-4">
    {users.map(({ username, fullName }) => (
      <div key={username} className="flex items-center gap-2 justify-between">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-secondary" />
          <div>
            <span className="block text-sm leading-none font-semibold">
              {fullName}
            </span>
            <span className="text-xs leading-none">@{username}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="outline">
            <MoreHorizontalIcon className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="outline" className="text-destructive">
            <BanIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    ))}
  </div>
);

export default function UnderlinedTabsDemo() {
  return (
    <Tabs defaultValue="followers" className="max-w-xs w-full">
      <TabsList className="w-full grid grid-cols-2 p-0 bg-background border-b rounded-none h-auto">
        <TabsTrigger
          value="followers"
          className="data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-primary rounded-none py-3"
        >
          Followers
        </TabsTrigger>
        <TabsTrigger
          value="following"
          className="data-[state=active]:bg-none data-[state=active]:shadow-none data-[state=active]:border-b data-[state=active]:border-primary rounded-none py-3"
        >
          Following
        </TabsTrigger>
      </TabsList>

      <div className="mt-2 p-4 border rounded-md">
        <TabsContent value="followers">
          <UserList users={followers} />
        </TabsContent>
        <TabsContent value="following">
          <UserList users={following} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
