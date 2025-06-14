import { CraftsmanStatus } from "~/types/common";
import type { BadgeVariant } from "../atoms/badge";
import Badge from "../atoms/badge";

export default function StatusBadgeCraftsman({
  status,
}: {
  status: CraftsmanStatus;
}) {
  let variant: BadgeVariant;
  let statusText: string;
  switch (status) {
    case CraftsmanStatus.ACTIVE:
      variant = "success";
      statusText = "Aktiv";
      break;
    case CraftsmanStatus.WAITING:
      variant = "warning";
      statusText = "Gözləmədə";
      break;
    case CraftsmanStatus.INACTIVE:
      variant = "info";
      statusText = "Qeyri-aktiv";
      break;
    default:
      variant = "info";
      statusText = "Qeyri-aktiv";
      break;
  }
  return <Badge variant={variant}>{statusText}</Badge>;
}
