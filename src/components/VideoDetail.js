

const VideoDetail = ({video}) => {
  return (
    <div className="video-detail">
      {video.snippet.title}
    </div>
  );
}

export default VideoDetail;
