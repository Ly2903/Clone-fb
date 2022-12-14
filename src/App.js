import { BrowserRouter, Outlet, Routes } from "react-router-dom";
import RealTime from "./components/Content/ReelTime/RealTime";
import CreatePost from "./components/CreatePost/CreatePost";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import PostList from "./components/PostList/PostList";
import RecentEvents from "./components/RecentEvents/RecentEvents";
import RoutesConfig from "./components/Routes/RoutesConfig";

function App() {
  return (
    <div className="App relative">
      <RoutesConfig />
    </div>
  );
}

export default App;
