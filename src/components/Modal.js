import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';

class ModalPage extends React.Component {
  render() {
    return (
      <Container>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}>
          <ModalHeader toggle={this.props.toggle}>Game Over! </ModalHeader>
          <ModalBody>
            You guessed the same character twice! Oh No!
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.props.toggle}>Reset</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default ModalPage;