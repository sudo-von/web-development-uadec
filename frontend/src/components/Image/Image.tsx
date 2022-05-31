interface ImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  style?: object;
}

const Image = ({ src, alt, height, width, style }: ImageProps) => {
  return (
    <img src={src} alt={alt} height={height} width={width} style={style} />
  );
};

export default Image;
