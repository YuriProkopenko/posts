import { useMemo } from "react";

const useFilter = (items, sortQuery, orderQuery, searchQuery) => {
  const filteredItems = useMemo(() => {
    let filteringItems = items;
    if (sortQuery)
      filteringItems.sort((a, b) => a[sortQuery].localeCompare(b[sortQuery]));
    if (orderQuery) filteringItems.reverse();
    if (searchQuery)
      filteringItems = filteringItems.filter((i) =>
        i.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return filteringItems;
  }, [items, sortQuery, searchQuery, orderQuery]);

  return filteredItems;
};

export default useFilter;
