interface ImageComponentProps {
    src: string;
    alt: string;
  }
  
  const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt }) => {
    return (
      <img src={src} alt={alt} className="rightAlign" />
    );
  }
  
  export default ImageComponent;
  