import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { Button } from "~/components/atoms/button";
import type { Craftsman } from "~/types/common";

interface NewCraftsmenListItemProps {
  craftsman: Craftsman;
}

export default function NewCraftsmenListItem({
  craftsman,
}: NewCraftsmenListItemProps) {
  const navigate = useNavigate();

  const onClickDetail = () => {
    navigate(`/craftsman/${craftsman.id}`, {
      state: {
        craftsman,
      },
    });
  };

  return (
    <div className="flex items-center gap-4">
      <img src={craftsman.image} className="h-9 w-9 rounded-full" />

      <div className="flex-1">
        <p className="text-sm font-medium">{craftsman.name}</p>
        <p className="text-xs text-muted-foreground">
          {craftsman.profession} • {dayjs(craftsman.createdAt).fromNow()}
        </p>
      </div>

      <Button variant="outline" onClick={onClickDetail}>
        <p className="text-sm font-medium">Baxış</p>
      </Button>
    </div>
  );
}
