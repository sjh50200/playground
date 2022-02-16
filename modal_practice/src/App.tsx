import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal1 from "./atoms/Modal1";
import Modal2 from "./atoms/Modal2";
import { RootState } from "./modules";
import { closeModal, openModal } from "./modules/modalReducer";

const App = (props: any) => {
  const isOpen1 = useSelector(
    (state: RootState) => state.modalReducer.isUploadOpen
  );
  const isOpen2 = useSelector(
    (state: RootState) => state.modalReducer.isProfileOpen
  );
  const dispatch = useDispatch();

  const handleClick1 = () => {
    dispatch(openModal("upload"));
  };
  const handleCancel1 = () => {
    dispatch(closeModal("upload"));
  };

  const handleClick2 = () => {
    dispatch(openModal("profile"));
  };

  const handleCancel2 = () => {
    dispatch(closeModal("profile"));
  };
  return (
    <div>
      <button onClick={handleClick1}>모달1 열기</button>
      <button onClick={handleClick2}>모달2 열기</button>
      <Modal1 />
      <Modal2 isOpen={isOpen2} onCancel={handleCancel2} />
    </div>
  );
};

export default App;
