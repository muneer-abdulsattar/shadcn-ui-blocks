import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CircleFadingArrowUpIcon } from "lucide-react";

export default function AlertDemo() {
  return (
    <Alert>
      <CircleFadingArrowUpIcon className="h-4 w-4" />
      <AlertTitle>Update Available</AlertTitle>
      <AlertDescription>
        A new version of the app is now available.
      </AlertDescription>
    </Alert>
  );
}
