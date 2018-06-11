import React, { Component } from 'react';
import albumData from './../data/albums';
import '../styles/Album.css';
import PlayerBar from './PlayerBar';
import { Grid, Row, Col, Image, Table } from 'react-bootstrap';

class Album extends Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });
        
        this.state = {
            album: album,
            currentSong: album.songs[0],
            currentTime: 0,
            duration: album.songs[0].duration,
            currentVolume: 0.6,
            isPlaying: false,
            isHovered: false,
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount() {
        this.eventListeners = {
            timeupdate: e => {
                this.setState({ currentTime: this.audioElement.currentTime });
            },
            durationchange: e => {
                this.setState({ duration: this.audioElement.duration });
            }
        };
        this.audioElement.addEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.addEventListener('durationchange', this.eventListeners.durationchange);
    }

    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
    }
  
    play() {
        this.audioElement.play();
        this.setState({ isPlaying: true });
    }

    pause() {
        this.audioElement.pause();
        this.setState({ isPlaying: false });
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState({ currentSong: song });
    }

    handleSongClick(song) {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause();
        } else {
            if (!isSameSong) { this.setSong(song); }
            this.play();
        }
    }

    handlePrevClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const newIndex = Math.max(0, currentIndex - 1);
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleNextClick() {
        const currentIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const albumLength = this.state.album.songs.length - 1;
        const newIndex = Math.min(albumLength, currentIndex+1 );
        const newSong = this.state.album.songs[newIndex];
        this.setSong(newSong);
        this.play();
    }

    handleTimeChange(e) {
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime })
    }

    formatTime(seconds) {
        if (isNaN(seconds)) {return "-:--";}
        const wholeSeconds = Math.floor(seconds);
        const minutes = Math.floor(wholeSeconds / 60);
        const remainingSeconds = wholeSeconds % 60;
        let output = minutes + ':';
        if (remainingSeconds < 10) {
            output += '0'
        }
        output += remainingSeconds;
        return output; 
    }

    handleVolumeChange(e) {
        const newVolume = e.target.value;
        this.audioElement.currentVolume = newVolume;
        this.setState({ currentVolume: newVolume });
        this.audioElement.volume = newVolume;
      }


    render() {
        
        return (
            <Grid>
            <Row className="show-grid">
              <Row id="album-container">
                <Col xsHidden sm={6} md={6} id="column-1">
                    <Image id="album-image" circle responsive src={this.state.album.albumCover} alt={this.state.album.title} />
                </Col>

                <Col xs={12} sm={6} md={6} id="column-2">

                    <Row id="album-info">
                        <h1 id="album-title">{this.state.album.title}</h1>
                        <h2 id="artist">{this.state.album.artist}</h2>
                        <div id="release-info">{this.state.album.releaseInfo}</div>
                    </Row>
                    
                    <Row id="song-list">
                        <Table responsive>
                            <colgroup>
                                <col id="song-number-column" />
                                <col id="song-title-column" />
                                <col id="song-duration-column" />
                            </colgroup>
                            <tbody>
                                {
                                this.state.album.songs.map( (song, index) =>
                                    <tr 
                                        className={"song"} 
                                        key={index} 
                                        onClick={()=> this.handleSongClick(song)} 
                                        onMouseEnter={() => this.setState({ isHovered: index + 1 })} 
                                        onMouseLeave={() => this.setState({ isHovered: false })}>

                                        { (this.state.currentSong.title === song.title) ?
                                        this.state.isPlaying ? <td className="icon ion-ios-pause"></td> : <td className="icon ion-ios-play"></td>
                                        :
                                        (this.state.isHovered === index + 1) ?
                                        <td className="icon ion-ios-play"></td> 
                                        :
                                        <td className="song-number">{index+1})</td>
                                        }
                                        <td>{song.title}</td> 
                                        <td>{this.formatTime(song.duration)}</td> 
                                    </tr> 
                        )
                        }
                            </tbody>
                        </Table>
                    </Row>   
                </Col>  
                
             </Row>
             <PlayerBar 
                    isPlaying={this.state.isPlaying} 
                    currentSong={this.state.currentSong} 
                    currentArtist={this.state.album.artist}
                    currentTime={this.audioElement.currentTime}
                    duration={this.audioElement.duration}
                    currentVolume={this.state.currentVolume}
                    handleSongClick={() => this.handleSongClick(this.state.currentSong)}
                    handlePrevClick={() => this.handlePrevClick()}
                    handleNextClick={() => this.handleNextClick()}
                    handleTimeChange={(e) => this.handleTimeChange(e)}
                    handleVolumeChange={(e) => this.handleVolumeChange(e)}
                    formatTime={(t) => this.formatTime(t)}
                    />
            </Row>
            
            </Grid>

            
                

        );
    }
}

export default Album;