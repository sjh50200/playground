import { FunctionComponent } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { closeModal } from "../../modules/modalReducer";

interface ModalProps {
  isOpen: boolean;
  onCancel: () => void;
}

const Modal1: FunctionComponent<ModalProps> = (props) => {
  const { isOpen, onCancel } = props;
  const dispatch = useDispatch();

  const requestClose = () => {
    dispatch(closeModal("profile"));
  };

  return (
    <ReactModal isOpen={isOpen} onRequestClose={requestClose}>
      Profile 입니다. <button onClick={onCancel}>취소</button>
    </ReactModal>
  );
};
export default Modal1;

const StyledDiv = styled.div`
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
