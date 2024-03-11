import { RiSearchLine } from "react-icons/ri";
import TextInput from "../../../UI/TextInput";

import styles from "./SearchInput.module.css";

const SearchInput = ({ onSearch }) => {
  return (
    <div className={styles["wrapper"]}>
      <RiSearchLine className={styles["search-icon"]} size="25px" />
      <TextInput
        className={styles["search-input"]}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
