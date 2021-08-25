import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap';
import { Modal, Button } from 'react-bootstrap';

function TrailMapModal (props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { name } = props;

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View Trail Map
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Body>
          <img src="https://skimap.org/data/315/3535/1618775636jpg_render.jpg"></img>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default TrailMapModal;