import { FilterIcon, PlusIcon, StarIcon } from "lucide-react";
import { Button } from "~/components/atoms/button";
import PageHeader from "~/components/molecules/pageHeader";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type FilterFn,
  type VisibilityState,
} from "@tanstack/react-table";
import { CraftsmanStatus, type Craftsman } from "~/types/common";
import { AppTable } from "~/components/organisms/appTable";
import { craftsmen } from "~/dummy/craftsman";
import Badge, { type BadgeVariant } from "~/components/atoms/badge";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import { Input } from "~/components/atoms/input";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/atoms/select";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "~/components/atoms/dropdown-menu";
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
    accessorKey: "rating",
    header: "Reytinq",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-1">
          <StarIcon
            width={14}
            height={14}
            fill="oklch(79.5% 0.184 86.047)"
            stroke="none"
          />
          <p>{row.original.rating}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    filterFn: (row, id, value) => row.getValue(id) === value,
    cell: ({ row }) => <StatusBadgeCraftsman status={row.original.status} />,
  },
  {
    accessorKey: "orders",
    header: "Sifarişler",
  },
  {
    accessorKey: "createdAt",
    header: "Qoşulub",
    cell: ({ row }) => {
      return <p>{dayjs(row.original.createdAt).format("DD/MM/YYYY")}</p>;
    },
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
          <Button size="sm" variant="outline" onClick={onClickDetail}>
            <p>Bax</p>
          </Button>
        </div>
      );
    },
  },
];

export default function AllCraftsman() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const table = useReactTable({
    data: craftsmen,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
      columnVisibility,
    },
    filterFns: {
      exactStatus: ((row, columnId, filterValue) => {
        return row.getValue(columnId) === filterValue;
      }) as FilterFn<Craftsman>,
    },
  });

  const nameColumn = table.getColumn("name");
  const statusColumn = table.getColumn("status");
  const professionColumn = table.getColumn("profession");
  const allProfessions = craftsmen.map((craftsman) => craftsman.profession);

  return (
    <div>
      <PageHeader
        title="Ustalar"
        description="Sistemdəki bütün ustaları idarə edin və izləyin"
        actions={
          <Button size="lg">
            <PlusIcon width={24} height={24} />
            Yeni Usta Əlavə Et
          </Button>
        }
      />

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <SearchCraftsman
          value={nameColumn?.getFilterValue() as string}
          onChange={(value) => nameColumn?.setFilterValue(value)}
        />

        <Select
          value={(statusColumn?.getFilterValue() as string) ?? "all"}
          onValueChange={(value) =>
            value === "all"
              ? statusColumn?.setFilterValue("")
              : statusColumn?.setFilterValue(value)
          }
        >
          <SelectTrigger className="w-full sm:w-[160px]">
            <SelectValue placeholder="Bütün Statuslar" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Bütün Statuslar</SelectItem>
            <SelectItem value={CraftsmanStatus.ACTIVE}>Aktiv</SelectItem>
            <SelectItem value={CraftsmanStatus.INACTIVE}>
              Qeyri-aktiv
            </SelectItem>
            <SelectItem value={CraftsmanStatus.WAITING}>Gözləmədə</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={(professionColumn?.getFilterValue() as string) ?? "all"}
          onValueChange={(value) =>
            value === "all"
              ? professionColumn?.setFilterValue("")
              : professionColumn?.setFilterValue(value)
          }
        >
          <SelectTrigger className="w-full sm:w-[160px]">
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
            <Button variant="outline" className="w-full sm:w-auto sm:ml-auto">
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
