import { ClipboardListIcon } from "lucide-react";
import relativeTime from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";
import { OrderStatus, type Order } from "~/types/order";
import Badge from "~/components/atoms/badge";

dayjs.extend(relativeTime);

interface LastOrdersListItemProps {
  order: Order;
}

export default function LastOrdersListItem({ order }: LastOrdersListItemProps) {
  const { title, serviceType, date, status } = order;

  const statusText =
    status === OrderStatus.IN_PROGRESS
      ? "İcra olunur"
      : status === OrderStatus.WAITING
      ? "Gözləyir"
      : "Tamamlanıb";

  return (
    <div className="flex items-center gap-4">
      <div className="bg-primary/10 h-9 w-9 rounded-full flex items-center justify-center">
        <ClipboardListIcon width={20} height={20} />
      </div>

      <div className="flex-1">
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">
          {serviceType} • {dayjs(date).fromNow()}
        </p>
      </div>

      <Badge
        variant={
          status === OrderStatus.IN_PROGRESS
            ? "info"
            : status === OrderStatus.WAITING
            ? "warning"
            : "success"
        }
      >
        statusText
      </Badge>
    </div>
  );
}
