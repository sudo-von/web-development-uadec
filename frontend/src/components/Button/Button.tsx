import styles from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  type?: 'button' | 'submit';
  style?: object;
  onClick?: () => void;
}

const Button = ({
  children,
  type = 'button',
  style = {},
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={{ ...styles.button, ...style }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
