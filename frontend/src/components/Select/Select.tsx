import styles from './Select.styles';

export interface Option {
  key: string;
  value: string;
}

interface InputProps {
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  style?: object;
  name?: string;
  options: Option[];
  defaultOption?: string;
}

const Select = ({
  id,
  onChange,
  style,
  name,
  options,
  defaultOption,
}: InputProps) => {
  return (
    <div className="customSelect">
      <select
        className="customSelect"
        id={id}
        name={name}
        style={{ ...styles.select, ...style }}
        onChange={onChange}
        defaultValue={0}
      >
        {defaultOption && (
          <option disabled value={0}>
            {defaultOption}
          </option>
        )}
        {options.map(({ key, value }) => (
          <option key={`${key}-${value}`} value={value}>
            {key}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
