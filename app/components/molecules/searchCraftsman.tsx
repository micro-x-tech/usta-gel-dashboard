import { SearchIcon } from "lucide-react";
import { Input } from "../atoms/input";

interface SearchCraftsmanProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchCraftsman({
  value,
  onChange,
}: SearchCraftsmanProps) {
  return (
    <Input
      placeholder="Ustaları axtar..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="flex-1"
      startIcon={SearchIcon}
    />
  );
}
