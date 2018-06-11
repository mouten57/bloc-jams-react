import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './../styles/Library.css';
import { Grid, Row, Col, Image } from 'react-bootstrap'

class Library extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: albumData }
    }
    render() {
        return (
            <Grid>
                
                    <section className="library">
                    <h1 className="lib-header">Albums</h1>
                    {
                        this.state.albums.map( (album, index) =>
                        <Row className="BS">
                            <Col xs={6} className="album img">
                                <Image responsive circle src={album.albumCover} alt={album.title} />
                            </Col>
                            <Col xs={6} className='album-links'>
                                <Link to={`/album/${album.slug}`} key={index}>
                                    <div className="lib-album-title">{album.title}</div>
                                    <div className="lib-album-artist"> {album.artist} </div>
                                    <div className="lib-album-length"> { album.songs.length } songs </div>
                                </Link>
                            </Col>
                        </Row>  
                        )
                    }
                    </section>

            </Grid>
        );
    }
}

export default Library;