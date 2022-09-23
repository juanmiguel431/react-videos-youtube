import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {videos: [], selectedVideo: null};
  onSearch = async (term) => {
    const response = await youtube.get('/search', {params: {q: term}});
    const items = response.data.items;
    const selected = items.length === 0 ? null : items[0];
    this.setState({videos: items, selectedVideo: selected});
  };

  componentDidMount() {
    this.onSearch('buildings');
  }

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  render() {
    return (
      <div className="app ui container">
        <SearchBar onSearch={this.onSearch}/>
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo}/>
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
                selectedVideo={this.state.selectedVideo}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
