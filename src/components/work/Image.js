function Image(props) {
  const videos = props.images.map((prop) => (
    <div className="img-video-container">
      <img src={prop.src} alt={prop.alt} onClick={props.onClick} />
    </div>
  ));

  return videos;
}

export default Image;
