import styles from "./ImageWrapper.module.scss";

function ImageWrapper({ children, width, height, ...restProps }) {
  const containerStyle = {
    width, // width:width
    height,
  };
  return (
    <div
      {...restProps}
      className={styles.imageContainer}
      style={containerStyle}
    >
      {children}
    </div>
  );
}

export default ImageWrapper;
