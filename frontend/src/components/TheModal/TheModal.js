import React from 'react';
import { 
  Modal,
  ModalOverlay,
  ModalContent,
} from '@chakra-ui/react';
import './TheModal.css';

export default function TheModal(props) {
  return (
    <div>
      <Modal className="modal-one" isCentered isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent>
          {props.children}
          {/* <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  )
}

