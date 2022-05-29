import styles from './TransparentButton.styles';

interface TransparentButtonProps {
  children: React.ReactNode;
  style?: object;
}

const TransparentButton = ({ children, style }: TransparentButtonProps) => {
  return (
    <div style={{ ...styles.transparentButton, ...style }}>{children}</div>
  );
};

export default TransparentButton;
