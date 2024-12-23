import React from 'react';
import '../styles/home.css'
import { Container, Row, Col } from 'reactstrap';

import heroImg from '../assets/images/hero-img01.jpg'
import heroImg02 from '../assets/images/hero-img02.jpg'
import heroVideo from '../assets/images/hero-video.mp4'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

 
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import Subtitle from '../shared/Subtitle'; 
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';


const Home = () => {
  return (
    <>
      <section className="hero-section">
        <video src={heroVideo} autoPlay muted loop className="video-bg" />
        <div className="bg-overlay"></div>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flec align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1 style={{ color: "#DAA520" }}>
                  Welcome to Wonder of Asia {""}
                  <span className="highlight">Sri Lanka</span>
                </h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Laboriosam possimus saepe labore inventore, quidem quasi. Iste
                  in voluptates voluptas beatae commodi delectus sunt modi
                  magni, error doloremque vel cumque id!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* hero secion start*/}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">we offer our best services</h2>
            </Col>
            <ServiceList />
            <SearchBar />
          </Row>
        </Container>
      </section>

      {/*  featured tour collection start    */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      {/*  featured tour collection end    */}

      {/*  experiences start    */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experince__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br />
                  we will serve You
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Neque, repudiandae numquam! Et similique debitis cupiditate
                  doloremque, dignissimos reprehenderit delectus adipisci,
                  expedita dicta repellat excepturi quibusdam sint fugiat,
                  eveniet possimus. Harum.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experiences</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="exeperience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/*  experiences ends    */}

      {/* gallery starts    */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers tour gallery
              </h2>
            </Col>
            <Col lg="12">
              <MasonryImagesGallery />
            </Col>
          </Row>
        </Container>
      </section>

      {/* gallery ends    */}

      {/* testimonial section starts  */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">
                What our fans says about us
              </h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* testimonial section ends  */}
      <Newsletter />
    </>
  );
    
  
}

export default Home