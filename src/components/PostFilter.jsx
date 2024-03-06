import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Select from "./Select";
import SearchInput from "./SearchInput";

import styles from "./PostFilter.module.css";

const PostFilter = ({ filter, setFilter }) => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["sorting"]}>
        <Select
          options={[
            { value: "title", name: "Name" },
            { value: "body", name: "Description" },
          ]}
          onSelect={(selectedSort) =>
            setFilter({ ...filter, sort: selectedSort })
          }
        />
        <button
          className={styles["order-btn"]}
          onClick={() =>
            setFilter({
              ...filter,
              orderToUp: !filter.orderToUp,
            })
          }
        >
          {filter.orderToUp === true ? (
            <IoIosArrowDown size="25px" />
          ) : (
            <IoIosArrowUp size="25px" />
          )}
        </button>
      </div>
      <SearchInput
        onSearch={(searchQuery) =>
          setFilter({ ...filter, search: searchQuery })
        }
      />
    </div>
  );
};

export default PostFilter;
