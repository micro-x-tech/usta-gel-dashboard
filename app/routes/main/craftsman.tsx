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
      <div className="flex items-center gap-2 sm:gap-4">
        <Button variant="ghost" onClick={() => navigate(-1)}>
          <ArrowLeftIcon width={20} height={20} />
        </Button>

        <p className="text-2xl sm:text-3xl font-bold">Usta Detalları</p>
      </div>

      <div className="border rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
          <img
            src={craftsman.image}
            className="h-14 w-14 sm:h-16 sm:w-16 rounded-full"
            alt={craftsman.name}
          />

          <div className="text-center sm:text-left">
            <p className="text-xl sm:text-2xl font-semibold">
              {craftsman.name}
            </p>
            <p className="text-sm sm:text-base text-muted-foreground">
              ID: {craftsman.id}
            </p>
          </div>
        </div>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base">
          Bu səhifə usta detallarını göstərir. ID: {craftsman.id}
        </p>
      </div>
    </div>
  );
}
