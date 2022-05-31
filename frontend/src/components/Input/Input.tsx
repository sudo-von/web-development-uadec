import styles from './Input.styles';

interface InputProps {
  id?: string;
  placeholder?: string;
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: object;
  type?: string;
  name?: string;
}

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  style,
  type = 'text',
  name,
}: InputProps) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...styles.input, ...style }}
    />
  );
};

export default Input;
