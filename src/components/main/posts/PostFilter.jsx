import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Select from "../search/Select";
import SearchInput from "../search/SearchInput";

import styles from "./PostFilter.module.css";

const PostFilter = ({ filter, setFilter, onChangeLimit }) => {
  return (
    <div className={styles["wrapper"]}>
      <SearchInput
        onSearch={(searchQuery) =>
          setFilter({ ...filter, search: searchQuery })
        }
      />
      <div className={styles["arranging"]}>
        <div className={styles["sorting"]}>
          <Select
            options={[
              { value: "id", name: "Number" },
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
        <div className={styles["limits"]}>
          {filter.limits.map((limit) => (
            <button
              className={`${styles["limit-btn"]} ${
                limit.isActive ? styles["limit-active-btn"] : ""
              }`}
              key={limit.value}
              onClick={() => onChangeLimit(limit.value)}
            >
              {limit.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostFilter;
