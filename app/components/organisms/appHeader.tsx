import NotificationButton from "../molecules/notificationButton";
import UserAvatar from "../molecules/userAvatar";

export default function AppHeader() {
  return (
    <header className="h-[var(--header-height)] flex items-center justify-between px-6 border-b">
      <p className="text-lg font-semibold">Usta Gəl</p>

      <div className="flex items-center gap-4">
        <NotificationButton />
        <UserAvatar />
      </div>
    </header>
  );
}
