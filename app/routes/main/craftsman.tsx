import { ArrowLeftIcon } from "lucide-react";
import { Button } from "~/components/atoms/button";
import { useLocation, useNavigate } from "react-router";
import type { Craftsman } from "~/types/common";

export default function CraftsmanPage() {
  const navigate = useNavigate();

  const { craftsman } = useLocation().state as {
    craftsman: Craftsman;
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={24} height={24} />
        </Button>

        <p className="text-3xl font-bold">Usta Detalları</p>
      </div>

      <div className="border rounded-lg p-6 mt-6">
        <div className="flex items-center gap-4">
          <img src={craftsman.image} className="h-16 w-16 rounded-full" />

          <div>
            <p className="text-2xl font-semibold">{craftsman.name}</p>
            <p className="text-muted-foreground">ID: {craftsman.id}</p>
          </div>
        </div>

        <p className="mt-6">
          Bu səhifə usta detallarını göstərir. ID: {craftsman.id}
        </p>
      </div>
    </div>
  );
}
