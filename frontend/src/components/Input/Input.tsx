import styles from './Input.styles';

interface InputProps {
  id?: string;
  placeholder?: string;
  value: string | number;
  onChange?: () => void;
  style?: object;
}

const Input = ({ id, placeholder, value, onChange, style }: InputProps) => {
  return (
    <input
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...styles.input, ...style }}
    />
  );
};

export default Input;
