import {
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type VisibilityState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Button } from "~/components/atoms/button";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/atoms/select";
import { Select } from "~/components/atoms/select";
import { craftsmenApproved } from "~/dummy/craftsman";
import type { Craftsman } from "~/types/common";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/atoms/dropdown-menu";
import { FilterIcon } from "lucide-react";
import { AppTable } from "../appTable";
import dayjs from "dayjs";
import SearchCraftsman from "~/components/molecules/searchCraftsman";
import StatusBadgeCraftsman from "~/components/molecules/statusBadgeCraftsman";

export const columns: ColumnDef<Craftsman>[] = [
  {
    accessorKey: "name",
    header: "Ad",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-3">
          <img src={row.original.image} className="h-8 w-8 rounded-full" />
          <p className="font-medium">{row.original.name}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "profession",
    header: "İxtisas",
  },
  {
    header: "Əlaqə",
    cell: ({ row }) => {
      return (
        <div>
          <p className="text-sm">{row.original.phone}</p>
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "serviceAreas",
    header: "Xidmət Ərazisi",
    cell: ({ row }) => {
      return <p>{row.original.serviceAreas.join(", ")}</p>;
    },
  },
  {
    accessorKey: "approvalDate",
    header: "Təsdiq Tarixi",
    cell: ({ row }) => {
      return <p>{dayjs(row.original.approvalDate).format("MM/DD/YYYY")}</p>;
    },
  },
  {
    accessorKey: "trialPeriod",
    header: "Sınaq Dövrü",
    cell: ({ row }) => {
      return <p>{dayjs(row.original.trialPeriod).format("MM/DD/YYYY")}</p>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: (row, id, value) => row.getValue(id) === value,
    cell: ({ row }) => <StatusBadgeCraftsman status={row.original.status} />,
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Əməliyyatlar</div>,
    cell: ({ row }) => {
      const navigate = useNavigate();

      const onClickDetail = () => {
        navigate(`/craftsman/${row.original.id}`, {
          state: {
            craftsman: row.original,
          },
        });
      };

      return (
        <div className="flex items-center justify-end">
          <Button size="sm" onClick={onClickDetail}>
            <p>Bax</p>
          </Button>
        </div>
      );
    },
  },
];

export default function ApprovedCraftsmenTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: craftsmenApproved,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      columnVisibility,
    },
  });

  const nameColumn = table.getColumn("name");
  const professionColumn = table.getColumn("profession");
  const allProfessions = craftsmenApproved.map(
    (craftsman) => craftsman.profession
  );

  return (
    <div>
      <div className="flex items-center gap-2">
        <SearchCraftsman
          value={nameColumn?.getFilterValue() as string}
          onChange={(value) => nameColumn?.setFilterValue(value)}
        />

        <Select
          value={(professionColumn?.getFilterValue() as string) ?? "all"}
          onValueChange={(value) =>
            value === "all"
              ? professionColumn?.setFilterValue("")
              : professionColumn?.setFilterValue(value)
          }
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Bütün İxtisaslara</SelectItem>
            {allProfessions.map((profession) => (
              <SelectItem key={profession} value={profession}>
                {profession}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              <FilterIcon width={24} height={24} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <AppTable table={table} className="mt-6" />
    </div>
  );
}
