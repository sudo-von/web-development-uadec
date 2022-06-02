import styles from './Input.styles';

interface InputProps {
  id?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: object;
  type?: string;
  name?: string;
  accept?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
}

const Input = ({
  id,
  placeholder,
  value,
  onChange,
  style,
  type = 'text',
  name,
  accept,
  inputRef,
  disabled,
}: InputProps) => {
  return (
    <input
      ref={inputRef}
      id={id}
      name={name}
      type={type}
      accept={accept}
      disabled={disabled}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ ...styles.input, ...style }}
    />
  );
};

export default Input;
