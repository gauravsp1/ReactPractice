import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ModalView from "./Components/Modal/ModalView";
import { useState } from "react";
import InfiniteView from "./Components/Infinite/InfiniteView";
import Accordian from "./Components/Accordian/Accordian";
import NestedComment from "./Components/NestedComments/NestedComment";
import ImageSlider from "./Components/ImageSlider/ImageSlider";
import CountDown from "./Components/CountDown/CountDown";
import StopWatch from "./Components/StopWatch/StopWatch";
import Clock from "./Components/Clock/Clock";
import StarRating from "./Components/StarRating/StarRating";
import NotFound from "./Components/NotFound";
import Calculator from "./Components/Calculator/Calculator";

function App() {
  const [selectedRoute, setSelectedRoute] = useState("Infinite Scroll");
  const navigate = useNavigate();
  const routes = [
    {
      title: "Infinite Scroll",
      path: "/",
    },
    {
      title: "Accordian",
      path: "/accordian",
    },
    {
      title: "Modal View",
      path: "/modal-view",
    },
    {
      title: "Nested Comments",
      path: "/nested-comments",
    },
    {
      title: "Image Slider",
      path: "/image-slider",
    },
    {
      title: "CountDown",
      path: "/counter",
    },
    {
      title: "StopWatch",
      path: "/stopwatch",
    },
    {
      title: "Clock",
      path: "/clock",
    },
    {
      title: "Star Rating",
      path: "/star",
    },
    {
      title: "Calculator",
      path: "/calculator",
    },
  ];
  return (
    <div className="App">
      <div className="header-section">
        {routes?.map((item) => {
          return (
            <span
              className={`header-item ${
                selectedRoute === item?.title ? "active" : ""
              }`}
              onClick={() => {
                setSelectedRoute(item?.title);
                navigate(item?.path);
              }}
            >
              {item?.title}
            </span>
          );
        })}
      </div>

      <Routes>
        <Route path="/modal-view" element={<ModalView />} exact />
        <Route path="/" element={<InfiniteView />} exact />
        <Route path="/accordian" element={<Accordian />} exact />
        <Route path="/nested-comments" element={<NestedComment />} exact />
        <Route path="/image-slider" element={<ImageSlider />} exact />
        <Route path="/counter" element={<CountDown />} exact />
        <Route path="/stopwatch" element={<StopWatch />} exact />
        <Route path="/clock" element={<Clock />} exact />
        <Route path="/star" element={<StarRating />} exact />
        <Route path="/calculator" element={<Calculator />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
