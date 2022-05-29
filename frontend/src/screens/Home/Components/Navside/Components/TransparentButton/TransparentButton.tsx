import styles from './TransparentButton.styles';

interface TransparentButtonProps {
  children: React.ReactNode;
}

const TransparentButton = ({ children }: TransparentButtonProps) => {
  return <div style={styles.transparentButton}>{children}</div>;
};

export default TransparentButton;
