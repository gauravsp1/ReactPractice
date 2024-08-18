import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../Redux/Slices/userSlice";
import Modal from "./Modal";

function ModalView() {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.user);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      {" "}
      <div
        style={{
          background: "red",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
        quisquam reprehenderit voluptatibus repellat in unde esse eos labore
        optio nihil illum assumenda aliquid maxime, quos distinctio impedit
        provident, blanditiis dolorem.
        <button onClick={() => setShowModal(true)}>Click</button>
      </div>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          {" "}
          <h1>Hello, I'm a modal!</h1>
        </Modal>
      )}
    </div>
  );
}

export default ModalView;
