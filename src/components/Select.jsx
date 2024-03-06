import styles from "./Select.module.css";

const Select = ({ options, value, onSelect }) => {
  return (
    <select
      className={styles["wrapper"]}
      value={value}
      onChange={(e) => onSelect(e.target.value)}
    >
      {options.map((o) => (
        <option key={o.name} value={o.value}>
          {o.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
