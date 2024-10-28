"use client";
import { useFilterSearchContext } from "@/context/FilterSearchContext";
import Skeleton from "@/components/skeleton/skeleton";
import SearchBar from "@/components/search-filter/search";
import { FilterPanel } from "@/components/search-filter/filter";
import { flexRender } from "@tanstack/react-table";

const Table = () => {
  const { table, loading } = useFilterSearchContext();

  return (
    <div className="p-4 w-full h-screen flex flex-col">
      <SearchBar />
      <FilterPanel />
      <hr />
      {loading ? (
        <Skeleton />
      ) : (
        <div className="flex-grow overflow-hidden">
          <div className="overflow-y-auto max-h-[calc(100vh-305px)] min-h-[300px]">
            <table className="min-w-full border-separate border-spacing-0">
              <thead className="sticky top-0 bg-white z-10 shadow">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-2 py-4 text-center border-b border-gray-200 text-sm sm:text-base"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map((row) => (
                    <tr
                      key={row.id}
                      className="even:bg-gray-50 hover:bg-gray-100"
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-2 py-4 text-center text-sm sm:text-base"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="text-center py-4">
                      No matching records found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
