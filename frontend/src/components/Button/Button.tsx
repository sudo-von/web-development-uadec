import styles from './Button.styles';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit';
  style?: object;
}

const Button = ({ children, type = 'button', style = {} }: ButtonProps) => {
  return (
    <button style={{ ...styles.button, ...style }} type={type}>
      {children}
    </button>
  );
};

export default Button;
