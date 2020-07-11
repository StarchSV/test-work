import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {images} from "../images";

export const Gallery = ({galleryState}) => {
  return (
    <div className='container-fluid'>
      <h1 className='gallery__title pl-sm-5 pr-sm-5'>{galleryState.title}</h1>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          totalSlides={galleryState.images.length + 1}
          visibleSlides={3}
          step={3}
          infinite={true}
          className='mb-md-5 pl-sm-5 pr-sm-5 gallery__container'
      >
        <Slider>
          {images.map((image, index) => {
            return (
              <Slide index={index} key={index} innerClassName='gallery__image__container' >
                <div
                    className='gallery__image'
                    style={{backgroundImage: `url(${image})`}}
                />
              </Slide>
            )
          })}
        </Slider>
        <div className='gallery__footer'>
          <ButtonBack className='gallery__buttons'>
            <div className="gallery__button-left"/>
          </ButtonBack>
          <div className='gallery__dots__container'>
            <Dot className='gallery__dots' slide={0}/>
            <Dot className='gallery__dots' slide={3}/>
            <Dot className='gallery__dots' slide={6}/>
          </div>
          <ButtonNext className='gallery__buttons'>
            <div className="gallery__button-right"/>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

