import styles from 'src/components/Navbar/Components/Menu/Components/Button/Button.styles';

interface ButtonProps {
  style?: object;
  children: React.ReactNode;
}

const Button = ({ children, style }: ButtonProps) => {
  return <div style={{ ...styles.button, ...style }}>{children}</div>;
};

export default Button;
