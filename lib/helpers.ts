import { HandleSortingMethod } from "@/types/filter-search";

class Helpers {
  handleSorting: HandleSortingMethod = (id, desc, { setSorting }) => {
    setSorting((prevSorting) => {
      const existingSort = prevSorting.find((sort) => sort.id === id);

      if (existingSort) {
        return prevSorting.map((sort) =>
          sort.id === id ? { ...sort, desc } : sort
        );
      } else {
        return [{ id, desc }];
      }
    });
  };
}

const helpers = new Helpers();

export default helpers;
