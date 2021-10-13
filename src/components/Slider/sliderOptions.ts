import { Settings } from 'react-slick';

const sliderSettings: Settings = {
  slidesToShow: 4.3,
  infinite: false,
  dots: true,
  autoplay: true,
  arrows: false,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 2140,
      settings: {
        arrows: false,
        slidesToShow: 3.3,
      },
    },
    {
      breakpoint: 1580,
      settings: {
        arrows: false,
        slidesToShow: 2.3,
      },
    },
    {
      breakpoint: 1080,
      settings: {
        arrows: false,
        slidesToShow: 1.6,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.8,
      },
    },
    {
      breakpoint: 580,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
      },
    },
    {
      breakpoint: 440,
      settings: {
        arrows: false,
        slidesToShow: 1.6,
      },
    },
    {
      breakpoint: 335,
      settings: {
        arrows: false,
        slidesToShow: 1.3,
      },
    },
    {
      breakpoint: 280,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};

export default sliderSettings;
