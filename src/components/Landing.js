import React from 'react';
import './../styles/Landing.css';
import LandingImage from './../images/music-background-3.jpg';
import BottomImage from './../images/music-background.jpg';
import BottomImage2 from './../images/music-background-2.jpg';
import {Image, Grid, Row, Col, Navbar} from 'react-bootstrap';

const Landing = () => (
    <Grid className="landing-container">
        <Row className="title-block">
            <Col xsOffset={1} xs={6} sm={6} mdHidden lgHidden className="background">
                <Image rounded responsive src={LandingImage} alt="music background"/>
            </Col>
            <Col xs={6} sm={6} className="heading-block">
                <h1 className="hero-title">BLOC JAMS</h1>
                <h3 className="hero-sub-title">Turn the music up!</h3>
            </Col>
        </Row>
        <Row className="selling-points">
            <Col xs={12} md={6} lg={6} className="point">
                <h2 className="point-title">Choose your music.</h2>
                <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
            </Col>
            
            <Col xs={12} md={6} lg={6} className="point">
                <h2 className="point-title">Unlimited, streaming, ad-free.</h2>
                <p className="point-description">No arbitrary limits. No distractions.</p>
            </Col>
            
            <Col xs={12} md={6} mdPull={3} lg={6} className="point">
                <h2 className="point-title">Mobile enabled.</h2>
                <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
            </Col>  
        </Row>
        <Row id="bottom-images">
            <Col xs={6}  className="bottom-image-l">
            <Image responsive rounded src={BottomImage} alt="music background" />
            </Col>
            <Col xs={6}  className="bottom-image-r">
            <Image responsive rounded src={BottomImage2} alt="music background" />
            </Col>
        </Row>
        <Navbar fluid staticBottom id="nav-bottom">
  <Navbar.Header>
    <Navbar.Brand>
      BLOC JAMS
    </Navbar.Brand>
    
  </Navbar.Header>
  <Navbar.Collapse className="footer-collapse">
    <Navbar.Text pullRight>
      Turn the music up!
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>;
    </Grid>
);

export default Landing;