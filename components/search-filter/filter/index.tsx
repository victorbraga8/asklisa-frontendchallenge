import { CircleDollarSign, Star, Trash2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { useFilterSearchContext } from "@/context/FilterSearchContext";

export const FilterPanel = () => {
  const {
    categoryFilter,
    setCategoryFilter,
    priceRange,
    setPriceRange,
    rateRange,
    setRateRange,
    minPrice,
    maxPrice,
    isClearFilterEnabled,
    clearSearchFilter,
    uniqueCategories,
  } = useFilterSearchContext();

  return (
    <div className="flex flex-col md:flex-row lg:justify-center gap-4 mb-6 items-center w-full">
      <div className="w-full lg:w-60">
        <Select onValueChange={setCategoryFilter} value={categoryFilter || ""}>
          <SelectTrigger>
            <SelectValue placeholder="Product Category" />
          </SelectTrigger>
          <SelectContent>
            {uniqueCategories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex w-full sm:w-auto lg:gap-8 gap-2 items-center justify-between lg:justify-center">
        <div className="flex flex-col items-center lg:w-40 w-24">
          <div className="flex items-center gap-1">
            <CircleDollarSign size={18} />
            <p>Price</p>
          </div>
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={maxPrice}
            min={minPrice}
            step={1}
            className="w-full"
          />
          <div className="flex justify-between w-full text-sm mt-1">
            <span>{priceRange[0]}</span>
            <span>{priceRange[1]}</span>
          </div>
        </div>

        <div className="flex flex-col items-center lg:w-40 w-24">
          <div className="flex items-center gap-1">
            <Star size={18} />
            <p>Rate</p>
          </div>
          <Slider
            value={rateRange}
            onValueChange={setRateRange}
            max={5}
            min={0}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between w-full text-sm mt-1">
            <span>{rateRange[0]}</span>
            <span>{rateRange[1]}</span>
          </div>
        </div>

        <Button
          onClick={clearSearchFilter}
          className="bg-red-600 hover:bg-red-400 w-10 h-10 flex items-center justify-center"
          disabled={!isClearFilterEnabled}
        >
          <Trash2 size={20} />
        </Button>
      </div>
    </div>
  );
};
