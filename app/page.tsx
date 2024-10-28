import Table from "@/components/dashboard/table/table";
import { FilterSearchProvider } from "@/context/FilterSearchContext";
import { ProductProvider } from "@/context/ProductContext";

export default function Home() {
  return (
    <ProductProvider>
      <FilterSearchProvider>
        <div className="hidden md:flex flex-col items-center justify-center pt-6 pb-4 text-center">
          <h1 className="text-2xl font-semibold leading-tight">
            DashBoard AskLisa
          </h1>
        </div>
        <div className="w-full px-2 sm:px-4">
          <Table />
        </div>
      </FilterSearchProvider>
    </ProductProvider>
  );
}
