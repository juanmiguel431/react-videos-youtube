

const VideoDetail = ({video}) => {

  if (!video) {
    return <div>Loading...</div>
  }

  return (
    <div className="video-detail">
      <div className="ui embed">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${video.id.videoId}`}
          title={video.snippet.title}
          allowFullScreen
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
        <p>
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
