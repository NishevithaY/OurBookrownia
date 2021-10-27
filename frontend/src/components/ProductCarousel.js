import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Loader'
import Message from './Message'
import { listTopProducts } from '../actions/productActions'

import back from '../intro1.jpg';
import sell from '../sell.jpg';
import add from '../add.jpg';



const ProductCarousel = () => {
  const dispatch = useDispatch()

  const productTopRated = useSelector((state) => state.productTopRated)
  const { loading, error, products } = productTopRated

  useEffect(() => {
    dispatch(listTopProducts())
  }, [dispatch])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel pause='hover'  className='carousel'>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={back}
            alt="First slide"
          />
          <Carousel.Caption className='carousel-caption'>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={sell}
            alt="Third slide"
          />
          <Carousel.Caption className='carousel-caption'>

          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="d-block w-100"
            src={add}
            alt="Third slide"
          />
          <Carousel.Caption className='carousel-caption'>

          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

export default ProductCarousel
