import Container from 'src/components/Container/Container';
import Footer from 'src/components/Footer/Footer';
import Navbar from 'src/components/Navbar/Navbar';
import useMediaQuery from 'src/hooks/useMediaQuery';
import handleStyles from 'src/components/Skeleton/Skeleton.styles';

interface SkeletonProps {
  children: React.ReactNode;
}

const Skeleton = ({ children }: SkeletonProps) => {
  const isLarge = useMediaQuery('(min-width: 1100px)');
  const styles = handleStyles(isLarge);
  return (
    <Container justifyContent="center">
      <Container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        style={styles.skeletonContainer}
      >
        <Navbar />
        <div style={styles.container}>{children}</div>
        <hr style={styles.blackLine} />
        <Footer />
      </Container>
    </Container>
  );
};

export default Skeleton;
