import React from "react";
import story1 from "../../../../assets/video/bienhinh.mp4";
import avt from "../../../../assets/images/avt.jpg";
import image4 from "../../../../assets/images/image4.jpg";
import StoryItem from "./StoryItem";
import Slider from "react-slick";
import SliderStories from "../../../SliderCustom/SliderStories";

const Stories = () => {
  return (
    <div className="py-4">
      <div className="overflow-hidden pl-4 h-[200px]">
        <SliderStories>
          <StoryItem avt={avt} src={image4} auth="true" content="Tạo tin" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
          <StoryItem avt={avt} src={image4} nickname="Ly Trần" />
        </SliderStories>
      </div>
    </div>
  );
};

export default Stories;
