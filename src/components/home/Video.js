function Video(props) {
  return (
    <div className="video-container">
      <iframe
        title={props.title}
        src={props.src}
        height="430"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Video;
