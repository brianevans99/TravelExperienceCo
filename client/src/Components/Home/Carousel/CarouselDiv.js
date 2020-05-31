import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import defaultImg from '../../../Assets/Images/Carousel/defaultImg.jpg'

const Styles = styled.div`
  #carousel {
    height: 100vh;
    background-color: white;
  }
`

const CarouselDiv = () => (
  <Styles>
    <Carousel id='carousel'>
      <Carousel.Item>
        <img className='d-block w-100' src={defaultImg} alt='First slide' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </Styles>
)

export default CarouselDiv
