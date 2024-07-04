import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return ( 
  <section className="newsletter">
    <Container>
        <Row>
            <Col lg="6">
            <div className="newsletter__content">
                <h2>Subscribe now to get useful traveling information</h2>

                <div className="newsletter__input">
                    <input type = "email" placeholder= "Enter Your Email"/>
                    <button className="btn newsletter__btn">Subscribe</button>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat sed sapiente at esse nihil recusandae facilis voluptatibus, mollitia officia, velit incidunt explicabo, voluptates veniam? Accusantium eum corporis facere. Eius.
                </p>
            </div>
            </Col>

            <Col lg="6">
            <div className="newsletter__img">
                <img src={maleTourist} alt="" />
            </div>
            </Col>
        </Row>
    </Container>
  </section>
    );
  
};

export default Newsletter;