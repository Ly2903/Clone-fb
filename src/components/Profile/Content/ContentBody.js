import React from "react";
import TabContent from "../../Content/ReelTime/TabContent";
import About from "./About/About";
import Checkin from "./Checkin/Checkin";
import Friends from "./Friends/Friends";
import Images from "./Images/Images";
import More from "./More/More";
import Post from "./Post/Post";
import Video from "./Video/Video";

const ContentBody = ({ activeTab }) => {
  return (
    <div className="w-3/4 px-7 mt-4">
      <TabContent id="post" activeTab={activeTab}>
        <Post />
      </TabContent>
      <TabContent id="about" activeTab={activeTab}>
        <About />
      </TabContent>
      <TabContent id="friends" activeTab={activeTab}>
        <Friends />
      </TabContent>
      <TabContent id="image" activeTab={activeTab}>
        <Images />
      </TabContent>
      <TabContent id="video" activeTab={activeTab}>
        <Video />
      </TabContent>
      <TabContent id="checkin" activeTab={activeTab}>
        <Checkin />
      </TabContent>
      <TabContent id="more" activeTab={activeTab}>
        <More />
      </TabContent>
    </div>
  );
};

export default ContentBody;
