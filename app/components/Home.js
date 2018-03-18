// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css';
// import findAndConnect from './ccast';
// import { start } from './ccast';
type Props = {};

// console.log(start);
const root = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
//'file:///Users/dimascio/git/x-electron/videos';
let videoIdx = 0;
const videos = [
  `${root}/videos/video.mp4`,
  `${root}/videos/video2.mp4`,
  // `file://${__dirname}/../videos/video.mp4`,
  // `file://${__dirname}/../videos/video2.mp4`,
];
export default class Home extends Component<Props> {
  props: Props;
  constructor() {
    super();
    const autoPlay = true;
    this.state = {
      autoPlay,
      playing: autoPlay,
      videoPath: videos[videoIdx % videos.length],
    };
  }

  componentDidMount() {
    // start();
    // findAndConnect(function(err, res) {
    //   console.log('chromecast connect');
    //   console.log(err, res);
    // });
  }

  // componentDidUpdate() {
  //   console.log('-----', this.video);
  //   setTimeout(() => {
  //     this.video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  //     this.forceUpdate();
  //   }, 250);
  // }

  render() {
    console.log(__dirname);
    console.log(this.state.videoPath);
    setTimeout(() => {
      this.fullScreen();
    }, 3000);
    return (
      <div className={styles.container}>
        <video
          onClick={e => this.togglePlay()}
          ref={video => {
            this.video = video;
          }}
          // style={videoContainer}
          className={styles.videocontainer}
          id="video"
          src={this.state.videoPath}
          preload="true"
          autoPlay={this.state.autoPlay}
          controls={true}
        />
        <input
          className={styles.videoselector}
          type="button"
          id="btnEd"
          value="Next Video"
          onClick={e => this.changeVideo(e)}
        />
      </div>
    );
  }
  changeVideo(e) {
    console.log(this.video);
    videoIdx += 1;
    this.setState({
      videoPath: videos[videoIdx % videos.length],
    });
  }

  togglePlay(e) {
    this.state.playing ? this.video.pause() : this.video.play();
    this.setState({
      playing: !this.state.playing,
    });
  }

  fullScreen() {
    console.log('full', this.video);
    document
      .getElementById('video')
      .webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);

    // this.video.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
  }
}

var video = {
  objectFit: 'fill',
};
var videoContainer = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  // overflow: 'hidden',
};
