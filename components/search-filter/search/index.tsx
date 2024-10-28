import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eraser } from "lucide-react";
import { useFilterSearchContext } from "@/context/FilterSearchContext";

const SearchBar = () => {
  const { globalFilter, setGlobalFilter, clearSearchFilter } =
    useFilterSearchContext();

  return (
    <div className="flex justify-center items-center gap-0 mb-4 w-full">
      <div className="flex items-center w-[42.5rem]">
        <Input
          placeholder="Search product by name"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full"
        />
        <Button
          onClick={clearSearchFilter}
          className="bg-amber-600 hover:bg-amber-400 w-10 h-10 flex items-center justify-center"
          disabled={!globalFilter.length}
        >
          <Eraser size={20} className="text-white" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
