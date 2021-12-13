function Video(props) {
  return (
    <div className="video-container">
      <iframe
        title={props.title}
        src={props.src}
        height="450"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default Video;
