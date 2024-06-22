import React, { useState,useEffect } from 'react';
import photo from "../assets/images/Capture1.png";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap';
import axios from 'axios';
import "./componentstyle.css";
const items = [
  {
    src: photo,
    // src: 'https://picsum.photos/id/28/1200/400',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://picsum.photos/id/456/1200/400',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://picsum.photos/id/678/1200/400',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];



function Advertisement(args) {


  const [ads, setAds] = React.useState([]);
useEffect(() => {
  axios
    .get("http://localhost:3001/api/getAllPrAdvertisement")
    .then((res) => {
      // setCourses(res.data);
    setAds(res.data);
      console.log(res.data); 
    })
    .catch((err) => {
      console.log(err);
    });
},[]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = ads.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
      {/* <div style={{ width: '100%', maxHeight: '50%', overflow: 'hidden' }}> */}
          <img src={item.img_path} alt='xomlm' className="card-image-home" style={{ width: '100%', height: '370px' }} />
      {/* </div> */}

        {/* <img src={item.img_path} alt='xomlm' width="100%" height="400px" /> */}
        {/* <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          /> */}
      </CarouselItem>
    );
  });

  return (

    <Carousel className="carousel"
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      {/* <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        /> */}
    </Carousel>
  );
}

export default Advertisement;