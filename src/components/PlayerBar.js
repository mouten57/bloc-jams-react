import React, { Component } from 'react';
import './../styles/PlayerBar.css';
import { Navbar, Row, Col } from 'react-bootstrap';

class PlayerBar extends Component {
    render() {
        return (
            <Navbar fixedBottom id="player-navbar">
            <Row className="show-grid">
                <Col sm={8} smOffset={2} xs={10} xsOffset={1} className="player-bar">

            <Row className="player-buttons">
                <Col xs={12}>
                    <Col xs={4} className="text-right">
                    <button className="ion-btn" onClick={this.props.handlePrevClick}>
                    <span className="icon ion-ios-skip-backward"></span>
                  </button>
                </Col>
                <Col xs={4}  className="text-center">
                  <button className="ion-btn" onClick={this.props.handleSongClick} >
                    <span className={this.props.isPlaying ? 'icon ion-ios-pause' : 'icon ion-ios-play'}></span>
                  </button>
                </Col>
                <Col xs={4} className="text-left">
                  <button className="ion-btn" onClick={this.props.handleNextClick}>
                    <span className="icon ion-ios-skip-forward"></span>
                  </button>
                </Col>
              </Col>
            </Row>

            <Row id="current-song-display">
              <Col xs={12} className="song-name">
                {this.props.currentSong.title}
              </Col>
              <Col xs={12} className="artist-name">
                {this.props.currentArtist}
              </Col>
            </Row>

            <Row id="time-control">
              <Col xs={12}>
                <input
                  type="range"
                  className="seek-bar"
                  value={(this.props.currentTime / this.props.duration) || 0 }
                  max="1"
                  min="0"
                  step="0.01"
                  onChange={this.props.handleTimeChange}
                />
              </Col>
              <Col xs={6} className="current-time text-left">{this.props.formatTime(this.props.currentTime)}</Col>
              <Col xs={6} className="total-time text-right">{this.props.formatTime(this.props.duration)}</Col>
            </Row>

            <Row id="volume-control">
                <Col xs={12}>
                  <input
                    type="range"
                    className="seek-bar volume-control"
                    value={this.props.currentVolume}
                    max="1"
                    min="0"
                    step="0.01"
                    onChange={this.props.handleVolumeChange}
                  />
                </Col>
                <Col xs={6} className="icon ion-ios-volume-low text-left"></Col>
                <Col xs={6} className="icon ion-ios-volume-high text-right"></Col>
              
            </Row>

          </Col>
        </Row>
      </Navbar>
            
        );
    }
}

export default PlayerBar;
