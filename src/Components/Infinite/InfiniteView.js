import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMemesData } from "../../Redux/Slices/userSlice";
import "./InfiniteView.css";
import Shimmer from "./Shimmer";
function InfiniteView() {
  const dispatch = useDispatch();
  const { memesData, loading } = useSelector((state) => state?.user);

  const handleScroll = useCallback(() => {
    if (
      Math.ceil(window.innerHeight + window.scrollY) >=
      document.body.scrollHeight
    ) {
      dispatch(getMemesData());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMemesData());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <div>
      <h1>InfiniteView</h1>
      <div className="memes-container">
        {memesData?.length > 0 ? (
          memesData.map((meme, index) => (
            <div key={index} className="meme-item">
              <img src={meme.url} alt={meme.name} className="meme-image" />
            </div>
          ))
        ) : (
          <p>No memes available</p>
        )}
        {loading && <Shimmer />}
      </div>
    </div>
  );
}

export default InfiniteView;
