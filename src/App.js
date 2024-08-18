import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ModalView from "./Components/Modal/ModalView";
import { useState } from "react";
import InfiniteView from "./Components/Infinite/InfiniteView";
import Accordian from "./Components/Accordian/Accordian";
import NestedComment from "./Components/NestedComments/NestedComment";
import ImageSlider from "./Components/ImageSlider/ImageSlider";

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
        <Route path="/modal-view" element={<ModalView />} />
        <Route path="/" element={<InfiniteView />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/nested-comments" element={<NestedComment />} />
        <Route path="/image-slider" element={<ImageSlider />} />
      </Routes>
    </div>
  );
}

export default App;
