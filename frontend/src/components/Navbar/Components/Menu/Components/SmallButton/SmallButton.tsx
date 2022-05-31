import styles from 'src/components/Navbar/Components/Menu/Components/SmallButton/SmallButton.styles';

interface SmallButtonProps {
  children: React.ReactNode;
  marginRight: number;
  marginLeft: number;
}

const SmallButton = ({
  children,
  marginRight,
  marginLeft,
}: SmallButtonProps) => {
  const smallButtonStyles = styles(marginRight, marginLeft);
  return (
    <div style={smallButtonStyles.container}>
      <img
        style={smallButtonStyles.image}
        src="assets/header/bloque_opciones_head/separador_verde.png"
        alt="Separador verde"
      />
      <span style={smallButtonStyles.span}>{children}</span>
    </div>
  );
};

export default SmallButton;
