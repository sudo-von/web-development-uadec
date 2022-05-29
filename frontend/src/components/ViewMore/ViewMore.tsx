import Image from 'src/components/Image/Image';
import styles from 'src/components/ViewMore/ViewMore.styles';

const ViewMore = () => {
  return (
    <Image
      src="assets/bg_body_slice/view_more.png"
      alt="View more"
      width={67}
      height={10}
      style={styles.viewMore}
    />
  );
};

export default ViewMore;
