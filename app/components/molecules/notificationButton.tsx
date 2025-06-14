import { Bell } from "lucide-react";
import { Button } from "../atoms/button";

export default function NotificationButton() {
  // TODO: get from backend
  const isThereNotification = true;

  return (
    <Button variant="outline" size="icon" className="relative">
      <Bell />
      {isThereNotification && (
        <span className="absolute right-1 top-1 size-2 rounded-full bg-red-500" />
      )}
    </Button>
  );
}
