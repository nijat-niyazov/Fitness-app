import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, isOpened } from '../../redux/slices/modal';

const ModalComponent = ({ children, onClose }) => {
  const dispatch = useDispatch();
  const nema = useSelector(isOpened);

  return (
    <Modal
      isOpen={nema}
      onClose={() => dispatch(closeModal())}
      isCentered
      motionPreset="scale"
    >
      <ModalOverlay backdropFilter="brightness(0.5)" />
      <ModalContent>
        <ModalCloseButton />

        <ModalBody>{children} </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;
