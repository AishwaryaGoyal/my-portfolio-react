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

  return <main className="works">{images}</main>;
}

export default Image;
