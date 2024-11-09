import { Badge } from "@/components/ui/badge";

const StatusBadgeDemo = () => {
  return (
    <div className="flex items-center gap-3 flex-wrap">
      <Badge className="bg-amber-50 text-amber-500 border-amber-500 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-amber-500 mr-2" /> In
        Progress
      </Badge>
      <Badge className="bg-red-50 text-red-500 border-red-500 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-red-500 mr-2" /> Blocked
      </Badge>
      <Badge className="bg-emerald-50 text-emerald-500 border-emerald-500 rounded-full">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 mr-2" /> Done
      </Badge>
    </div>
  );
};

export default StatusBadgeDemo;
