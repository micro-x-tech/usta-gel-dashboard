import {
  getFilteredRowModel,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type SortingState,
  type VisibilityState,
  getSortedRowModel,
  type SortDirection,
} from "@tanstack/react-table";
import { useState } from "react";
import { Button } from "~/components/atoms/button";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/atoms/select";
import { Select } from "~/components/atoms/select";
import { craftsmenWaitingApproval } from "~/dummy/craftsman";
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
    accessorKey: "documents",
    header: "Sənədlər",
    cell: ({ row }) => {
      return (
        <div className="flex items-center gap-2">
          {row.original.documents.map((document) => (
            <p
              key={document}
              className="text-xs font-semibold border rounded-full px-2 py-0.5"
            >
              {document}
            </p>
          ))}
        </div>
      );
    },
  },
  {
    accessorKey: "applicationDate",
    header: "Müraciət Tarixi",
    cell: ({ row }) => {
      return <p>{dayjs(row.original.applicationDate).format("MM/DD/YYYY")}</p>;
    },
  },
  {
    accessorKey: "actions",
    header: () => <div className="text-right">Əməliyyatlar</div>,
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-end">
          <Button size="sm">
            <p>Yoxla</p>
          </Button>
        </div>
      );
    },
  },
];

export default function PendingCraftsmenTable() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [sorting, setSorting] = useState<SortingState>([
    { id: "applicationDate", desc: true },
  ]);

  const table = useReactTable({
    data: craftsmenWaitingApproval,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
    },
  });

  const nameColumn = table.getColumn("name");
  const professionColumn = table.getColumn("profession");
  const allProfessions = craftsmenWaitingApproval.map(
    (craftsman) => craftsman.profession
  );
  const applicationDateSorting: SortDirection = sorting.find(
    (sort) => sort.id === "applicationDate"
  )?.desc
    ? "desc"
    : "asc";

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

        <Select
          value={applicationDateSorting}
          onValueChange={(value) => {
            table.setSorting([
              { id: "applicationDate", desc: value === "desc" },
            ]);
          }}
        >
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Ən Yeni" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="desc">Ən yeni</SelectItem>
            <SelectItem value="asc">Ən köhnə</SelectItem>
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
