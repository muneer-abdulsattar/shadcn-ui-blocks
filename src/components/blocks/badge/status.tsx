import { Badge } from "@/components/ui/badge";

const StatusBadgeDemo = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="bg-amber-50 dark:bg-amber-100 text-amber-500 border-amber-500 dark:border-amber-600 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2" /> In
        Progress
      </Badge>
      <Badge className="bg-red-50 dark:bg-red-100 text-red-500 border-red-500 dark:border-red-600 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2" /> Blocked
      </Badge>
      <Badge className="bg-emerald-50 dark:bg-emerald-100 text-emerald-500 border-emerald-500 dark:border-emerald-600 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" /> Done
      </Badge>
    </div>
  );
};

export default StatusBadgeDemo;
