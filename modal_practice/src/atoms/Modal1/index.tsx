import { FunctionComponent } from "react";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../../modules";
import { closeModal } from "../../modules/modalReducer";

interface ModalProps {
  isOpen?: boolean;
  onCancel?: () => void;
}

const Modal1: FunctionComponent<ModalProps> = (props) => {
  // const { isOpen, onCancel } = props;
  const isOpen = useSelector(
    (state: RootState) => state.modalReducer.isUploadOpen
  );
  const dispatch = useDispatch();

  const requestClose = () => {
    dispatch(closeModal("upload"));
  };

  return (
    <ReactModal
      style={{
        content: {
          margin: "auto auto",
          border: "1px solid blue",
          width: "500px",
          height: "500px",
        },
      }}
      isOpen={isOpen}
      onRequestClose={requestClose}
    >
      upload 입니다. <button>취소</button>
    </ReactModal>
  );
};
export default Modal1;
