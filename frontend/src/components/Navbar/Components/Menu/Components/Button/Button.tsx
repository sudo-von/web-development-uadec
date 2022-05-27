import styles from 'src/components/Navbar/Components/Menu/Components/Button/Button.styles';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <div style={styles.button}>{children}</div>;
};

export default Button;
