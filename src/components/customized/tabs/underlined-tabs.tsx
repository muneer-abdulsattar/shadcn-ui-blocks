import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleDot, Code, GitPullRequestArrow, Settings } from "lucide-react";

const tabs = [
  {
    value: "code",
    label: "Code",
    icon: Code,
  },
  {
    value: "issues",
    label: "Issues",
    icon: CircleDot,
  },
  {
    value: "pullRequests",
    label: "Pull requests",
    icon: GitPullRequestArrow,
  },
  {
    value: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export default function UnderlinedTabsDemo() {
  return (
    <Tabs defaultValue={tabs[0].value} className="w-fit">
      <TabsList className="w-full p-0 bg-background border-b rounded-none h-auto justify-start">
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="data-[state=active]:bg-none data-[state=active]:shadow-none border-b-2 border-transparent data-[state=active]:border-orange-400 rounded-none py-3 gap-2"
          >
            <Icon className="h-4 w-4" /> {label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="mt-2 p-4 border rounded-md h-40 flex items-center justify-center">
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsContent key={value} value={value}>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-muted mx-auto">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-3 font-medium text-muted-foreground tracking-tight">
              {label} content goes here!
            </p>
          </TabsContent>
        ))}
      </div>
    </Tabs>
  );
}
