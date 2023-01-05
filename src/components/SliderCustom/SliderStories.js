import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avt from "../../assets/images/avt.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SliderStories = ({ children }) => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronRight}
        className={className}
        style={{
          ...style,
          background: "#3e4042",
          color: "#B0B3B8",
          borderRadius: "50%",
          padding: "14px",
          right: "16px",
        }}
        onClick={onClick}
      />
    );
  };
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        icon={faChevronLeft}
        className={className}
        style={{
          ...style,
          background: "#3e4042",
          color: "#B0B3B8",
          borderRadius: "50%",
          padding: "14px",
          zIndex: "1",
          left: "16px",
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: false,
    speed: 1000,
    slidesToScroll: 3,
    slidesToShow: 5,
    centerPadding: "60px",
    accessibility: false,
    draggable: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderStories;
