function Image(props) {
  const videos = props.images.map((prop, index) => (
    <div className="img-video-container" key={index}>
      <img
        src={prop.src}
        alt={prop.alt}
        key={prop.src}
        onClick={props.onClick}
      />
    </div>
  ));

  return <div className="works">{videos}</div>;
}

export default Image;
