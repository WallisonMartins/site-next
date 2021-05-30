import React, { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import { DataCard } from './DataCard';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Card.module.scss';

export const Cards = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(DataCard);
    console.log(DataCard);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => (
        <div className={styles.BoxCard}>
          <Card className={styles.CardContainer} key={item.id}>
            <Card.Img
              className={styles.CardImg}
              src={item.img}
              height="309px"
            />
            <Card.Body className={styles.CardBodyContainer}>
              <Card.Title className={styles.CardTitle}>{item.title}</Card.Title>
              <Card.Text className={styles.CardText}>{item.text}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </Slider>
  );
};
