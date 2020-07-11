import React, {useEffect, useState} from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image, Dot} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {images} from "../images";

export const Gallery = ({galleryState}) => {

  let imagesIsLoading = true;

  const [imgs, setImgs] = useState([])

  useEffect(() => {
    if (Math.random() > 0.5) {
      fetch('https://api.unsplash.com/photos/random?orientation=landscape&count=8', {
        method: 'GET',
        headers: {
          Authorization: 'Client-ID VwERD36HvSze02yu7bjbEsjpvz1Eh5kptDq6QzUA6_I'
        }
      })
        .then(res => res.json())
        .then(result => result.map(item => item.urls.regular))
        .then(sorted => {setImgs(sorted)})
        .catch(e => {
          console.log(e)
          setImgs(images)
        })
        .finally(() => {imagesIsLoading = false})
    } else {
      setImgs(images)
      imagesIsLoading = false
    }
  }, [])

  return (
    <div className='container-fluid'>
      <h1 className='gallery__title pl-sm-5 pr-sm-5'>{galleryState.title}</h1>
      <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={100}
          hasMasterSpinner={imagesIsLoading}
          totalSlides={imgs.length}
          visibleSlides={3}
          step={3}
          infinite={true}
          className='mb-md-5 pl-sm-5 pr-sm-5 gallery__container'
      >
        <Slider>

          {imgs.map((url, index) => {
            return (
              <Slide index={index} key={index} innerClassName='gallery__image__container' >
                <Image
                    tag={'div'}
                    src={url}
                    hasMasterSpinner={true}
                    className='gallery__image'
                />
              </Slide>
            )
          })}

        </Slider>
        <div className='gallery__footer mt-2'>
          <ButtonBack className='gallery__buttons'>
            <div className="gallery__button-left"/>
          </ButtonBack>
          <div className='gallery__dots__container'>
            <Dot className='gallery__dots' slide={0}/>
            <Dot className='gallery__dots' slide={3}/>
            <Dot className='gallery__dots' slide={imgs.length}/>
          </div>
          <ButtonNext className='gallery__buttons'>
            <div className="gallery__button-right"/>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

