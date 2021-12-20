function Image(props) {
  const images = props.images.map((prop, index) => (
    <div className="img-video-container" key={index}>
      <img
        src={prop.src}
        alt={prop.alt}
        key={prop.src}
        onClick={props.onClick}
      />
    </div>
  ));

  return <div className="works">{images}</div>;
}

export default Image;
