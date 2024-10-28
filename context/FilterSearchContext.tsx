"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  useRef,
  createContext,
  useContext,
} from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Product } from "@/types/product";
import { useProductContext } from "@/context/ProductContext";
import { FilterSearchContextProps } from "@/types/filter-search";
import helpers from "@/lib/helpers";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, ReceiptText } from "lucide-react";
import Image from "next/legacy/image";

const FilterSearchContext = createContext<FilterSearchContextProps | undefined>(
  undefined
);

export const FilterSearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const {
    defaultData,
    minPrice,
    maxPrice,
    setPriceRange: setGlobalPriceRange,
    priceRange: globalPriceRange,
    loading,
  } = useProductContext();

  const [globalFilter, setGlobalFilter] = useState<string>("");
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [priceRange, setPriceRange] = useState<number[]>(globalPriceRange);
  const [rateRange, setRateRange] = useState<number[]>([0, 5]);
  const [sorting, setSorting] = useState<SortingState>([]);
  const isInitialLoad = useRef(true);

  useEffect(() => {
    if (!loading && defaultData.length > 0 && isInitialLoad.current) {
      setPriceRange([minPrice, maxPrice]);
      setRateRange([0, 5]);
      isInitialLoad.current = false;
    }
  }, [loading, defaultData, minPrice, maxPrice]);

  const filteredData = useMemo(() => {
    if (loading || defaultData.length === 0) return [];
    return defaultData
      .filter((product) =>
        globalFilter
          ? product.title.toLowerCase().includes(globalFilter.toLowerCase())
          : true
      )
      .filter((product) =>
        categoryFilter ? product.category === categoryFilter : true
      )
      .filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      )
      .filter(
        (product) =>
          product.rating.rate >= rateRange[0] &&
          product.rating.rate <= rateRange[1]
      );
  }, [
    globalFilter,
    categoryFilter,
    priceRange,
    rateRange,
    defaultData,
    loading,
  ]);

  const isClearFilterEnabled = useMemo(() => {
    return (
      (categoryFilter && categoryFilter !== "") ||
      priceRange[0] !== minPrice ||
      priceRange[1] !== maxPrice ||
      rateRange[0] !== 0 ||
      rateRange[1] !== 5
    );
  }, [categoryFilter, priceRange, rateRange, minPrice, maxPrice]);

  const isClearSearchEnabled = useMemo(
    () => globalFilter !== "",
    [globalFilter]
  );

  const uniqueCategories = useMemo(() => {
    return [...new Set(defaultData.map((product) => product.category))];
  }, [defaultData]);

  const clearSearchFilter = useCallback(() => {
    setGlobalFilter("");
    setCategoryFilter(null);
    setPriceRange([minPrice, maxPrice]);
    setRateRange([0, 5]);
    setGlobalPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice, setGlobalPriceRange]);

  const sortingTable = useCallback((id: string, desc: boolean) => {
    helpers.handleSorting(id, desc, { setSorting });
  }, []);

  const columns = useMemo<ColumnDef<Product>[]>(
    () => [
      {
        accessorKey: "image",
        header: "Image",
        cell: (info) => (
          <Image
            src={info.getValue() as string}
            alt="Product Image"
            width={50}
            height={50}
            objectFit="contain"
          />
        ),
      },
      {
        accessorKey: "title",
        header: () => (
          <div className="flex justify-center items-center">
            Title
            <button
              aria-label="sort-desc-title"
              onClick={() => sortingTable("title", true)}
              className={`ml-2 ${
                sorting.some((sort) => sort.id === "title" && sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronUp />
            </button>
            <button
              aria-label="sort-asc-title"
              onClick={() => sortingTable("title", false)}
              className={`${
                sorting.some((sort) => sort.id === "title" && !sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronDown />
            </button>
          </div>
        ),
      },
      {
        accessorKey: "price",
        header: () => (
          <div className="flex justify-center items-center">
            Price
            <button
              aria-label="sort-desc-price"
              onClick={() => sortingTable("price", true)}
              className={`ml-2 ${
                sorting.some((sort) => sort.id === "price" && sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronUp />
            </button>
            <button
              aria-label="sort-asc-price"
              onClick={() => sortingTable("price", false)}
              className={`${
                sorting.some((sort) => sort.id === "price" && !sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronDown />
            </button>
          </div>
        ),
        cell: (info) => `$${info.getValue()}`,
      },
      {
        accessorKey: "category",
        header: () => (
          <div className="flex justify-center items-center">
            Category
            <button
              aria-label="sort-desc-category"
              onClick={() => sortingTable("category", true)}
              className={`ml-2 ${
                sorting.some((sort) => sort.id === "category" && sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronUp />
            </button>
            <button
              aria-label="sort-asc-category"
              onClick={() => sortingTable("category", false)}
              className={`${
                sorting.some((sort) => sort.id === "category" && !sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronDown />
            </button>
          </div>
        ),
      },
      {
        accessorFn: (row) => row.rating.rate,
        header: () => (
          <div className="flex justify-center items-center">
            Rate
            <button
              aria-label="sort-desc-rate"
              onClick={() => sortingTable("rate", true)}
              className={`ml-2 ${
                sorting.some((sort) => sort.id === "rate" && sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronUp />
            </button>
            <button
              aria-label="sort-asc-rate"
              onClick={() => sortingTable("rate", false)}
              className={`${
                sorting.some((sort) => sort.id === "rate" && !sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronDown />
            </button>
          </div>
        ),
        id: "rate",
      },
      {
        accessorFn: (row) => row.rating.count,
        header: () => (
          <div className="flex justify-center items-center">
            Count
            <button
              aria-label="sort-desc-count"
              onClick={() => sortingTable("count", true)}
              className={`ml-2 ${
                sorting.some((sort) => sort.id === "count" && sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronUp />
            </button>
            <button
              aria-label="sort-asc-count"
              onClick={() => sortingTable("count", false)}
              className={`${
                sorting.some((sort) => sort.id === "count" && !sort.desc)
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              <ChevronDown />
            </button>
          </div>
        ),
        id: "count",
      },
      {
        id: "details",
        header: "Details",
        cell: ({ row }) => (
          <Link href={`product/${row.original.id}`}>
            <Button className="relative w-10 bg-blue-800 hover:bg-blue-400">
              <ReceiptText size={20} className="absolute inset-0 m-auto" />
            </Button>
          </Link>
        ),
      },
    ],
    [sortingTable, sorting]
  );

  const table = useReactTable<Product>({
    data: filteredData,
    columns,
    state: { sorting },
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <FilterSearchContext.Provider
      value={{
        globalFilter,
        setGlobalFilter,
        categoryFilter,
        setCategoryFilter,
        priceRange,
        setPriceRange,
        rateRange,
        setRateRange,
        clearSearchFilter,
        filteredData,
        isClearFilterEnabled,
        isClearSearchEnabled,
        minPrice,
        maxPrice,
        sorting,
        sortingTable,
        table,
        loading,
        uniqueCategories,
      }}
    >
      {children}
    </FilterSearchContext.Provider>
  );
};

export const useFilterSearchContext = () => {
  const context = useContext(FilterSearchContext);
  if (!context) {
    throw new Error(
      "useFilterSearchContext must be used within a FilterSearchProvider"
    );
  }
  return context;
};
