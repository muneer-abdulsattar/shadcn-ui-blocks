import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { Bot, Settings, User } from "lucide-react";
import React from "react";

const tabs = [
  {
    value: "profile",
    icon: User,
  },
  {
    value: "chat",
    icon: Bot,
  },
  {
    value: "settings",
    icon: Settings,
  },
];

const VerticalBorderedTabs = () => {
  return (
    <div className="">
      <Tabs
        defaultValue="1"
        orientation="vertical"
        className="flex items-start gap-2"
      >
        <TabsList className="grid grid-cols-1 h-auto w-fit p-0 divide-y border">
          {tabs.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              className={cn(
                "rounded-none first:rounded-t-md last:rounded-b-md bg-background h-10 w-11 p-0",
                "data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex items-center justify-center w-60 aspect-square border rounded-lg p-6">
          {tabs.map((item) => (
            <TabsContent key={item.value} value={item.value}>
              <div className="mx-auto h-12 w-12 flex items-center justify-center rounded-full bg-muted">
                <item.icon />
              </div>
              <p className="text-center text-lg mt-4 font-medium text-muted-foreground tracking-tight capitalize">
                {item.value}
              </p>
            </TabsContent>
          ))}
        </div>
      </Tabs>
    </div>
  );
};

export default VerticalBorderedTabs;
