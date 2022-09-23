import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null};
  onSearch = async (term) => {
    const response = await youtube.get('/search', {params: {q: term}});
    this.setState({videos: response.data.items});
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSearch={this.onSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
          selectedVideo={this.state.selectedVideo}
        />
      </div>
    );
  }
}

export default App;
