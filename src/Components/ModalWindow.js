import React from 'react';
import { Modal } from 'react-bootstrap';
import UserDetailed from './UserDetailed';

function ModalWindow({ show, onHide, user }) {
  const option = {
    show,
    onHide,
  };
  return (
    <>
      <Modal
        {...option}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserDetailed user={user} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWindow;
