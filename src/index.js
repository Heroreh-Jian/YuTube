import _ from "lodash";
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_detail";
import YouTubeSearch from "youtube-api-search";
import Icon from "./icon.png"

const YT_API_KEY = "youtube-api-search";

class App extends Component{
  constructor(props){
    super(props);
  
    this.state = {
        videos: [],
        selectedVideo:null
    };
    
    this.videoSearch("diamond")
  }
  
  videoSearch(term){
    YouTubeSearch({key: YT_API_KEY, term:term},(videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
        });
    })
    
  }
  render(){
    const videoSearch = _.debounce( (searchterm) => { this.videoSearch(searchterm) }, 300);
    
    return (
      <div>
        <nav className="navbar navbar-light bg-faded">
        <h1>
          <img src={Icon} alt="YuTube" />uTube
          </h1>
        </nav>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
        
      </div>
     );
    } 

}

ReactDOM.render(<App />, document.querySelector('#container'));

