import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import UserDetailed from './UserDetailed';

function ModalWindow({ show, onHide, user, borderColor }) {
  const option = {
    onHide,
    show,
  };
  console.log(borderColor);
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
            Профиль пользователя:
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserDetailed user={user} borderColor={borderColor}/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalWindow;
