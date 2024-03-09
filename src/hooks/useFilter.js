import { useMemo } from "react";

export const useFilter = (items, sortQuery, orderQuery, searchQuery) => {
  const filteredItems = useMemo(() => {
    let filteringItems = items;
    if (sortQuery && sortQuery === "id")
      filteringItems.sort((a, b) => b[sortQuery] - a[sortQuery]);
    else if (sortQuery)
      filteringItems.sort((a, b) => a[sortQuery].localeCompare(b[sortQuery]));

    if (orderQuery) filteringItems.reverse();
    if (searchQuery)
      filteringItems = filteringItems.filter((i) =>
        i.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return filteringItems;
  }, [items, sortQuery, searchQuery, orderQuery]);

  return filteredItems;
};
