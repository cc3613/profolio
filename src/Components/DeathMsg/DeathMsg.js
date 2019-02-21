import React from 'react';

import {Button, Modal} from 'react-bootstrap';

import './DeathMsg.css';

const Msg = (props) => {
	return (
		<Modal show={props.show} onHide={props.onClose}>
          <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{props.children}</Modal.Body>
          <Modal.Body>Press "Restart" to restart.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={(e) => props.onClose(e)}>
              Restart
            </Button>
          </Modal.Footer>
        </Modal>
	)
}

export default Msg;