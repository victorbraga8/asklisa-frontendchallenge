import { Dispatch, SetStateAction } from "react";
import { Product } from "./product";
import { SortingState, Table } from "@tanstack/react-table";

export interface GlobalFilterProps {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string | null>>;
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setRateRange: React.Dispatch<React.SetStateAction<number[]>>;
  minPrice: number;
  maxPrice: number;
}

export interface ClearSearchFilterParams {
  setGlobalFilter: (value: string) => void;
  setCategoryFilter: (value: string | null) => void;
  setPriceRange: (value: [number, number]) => void;
  defaultData: Product[];
  setRateRange: (value: [number, number]) => void;
}

export interface SortingParam {
  id: string;
  desc: boolean;
}

export interface HandleSortingParams {
  setSorting: (setter: (prev: SortingParam[]) => SortingParam[]) => void;
}

export interface ClearFiltersProps {
  setFilter: (value: string) => void;
  setCategoryFilter: (value: string | null) => void;
  setPriceRange: (value: [number, number]) => void;
  setRateRange: (value: [number, number]) => void;
  minPrice: number;
  maxPrice: number;
}

export interface FilterPanelProps {
  categoryFilter: string | null;
  setCategoryFilter: Dispatch<SetStateAction<string | null>>;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  rateRange: number[];
  setRateRange: (value: number[]) => void;
  minPrice: number;
  maxPrice: number;
  isFilterClearEnabled: boolean;
  clearSearchFilter: () => void;
  defaultData: Product[];
}

export interface FilterSearchContextProps {
  globalFilter: string;
  setGlobalFilter: React.Dispatch<React.SetStateAction<string>>;
  categoryFilter: string | null;
  setCategoryFilter: React.Dispatch<React.SetStateAction<string | null>>;
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  rateRange: number[];
  setRateRange: (value: number[]) => void;
  clearSearchFilter: () => void;
  filteredData: Product[];
  isClearFilterEnabled: boolean;
  isClearSearchEnabled: boolean;
  minPrice: number;
  maxPrice: number;
  sorting: SortingState;
  sortingTable: (id: string, desc: boolean) => void;
  table: Table<Product>;
  loading: boolean;
  uniqueCategories: string[];
}

export interface HandleSortingMethod {
  (id: string, desc: boolean, params: HandleSortingParams): void;
}
