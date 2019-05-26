import React from "react";
import {
  Button,
  ButtonDropdown,
  DropdownMenu,
  DropdownToggle,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class FolderButtonElement extends React.Component {
  constructor(props) {
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.state = {
      dropdownIsOpen: false,
      modalOpen: false
    };
  }
  toggleModal() {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }
  toggleDropdown() {
    this.setState({ dropdownIsOpen: !this.state.dropdownIsOpen });
  }
  render() {
    return (
      <ButtonDropdown
        isOpen={this.state.dropdownIsOpen}
        toggle={this.toggleDropdown}
        block
      >
        <Modal isOpen={this.state.modalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            Delete confirmation
          </ModalHeader>
          <ModalBody>Are you sure?</ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                this.props.deleteFolder();
                this.toggleModal();
              }}
            >
              Yes
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Button
          onClick={this.props.changeToFolder}
          color={
            "todo_" + this.props.foldername === this.props.actualfoldername
              ? "primary"
              : "secondary"
          }
          block
        >
          {this.props.foldername}
        </Button>
        {"todo_" + this.props.foldername !== this.props.actualfoldername && (
          <div>
            <DropdownToggle caret color="secondary" />
            <DropdownMenu>
              <Button onClick={this.toggleModal} color="secondary" block>
                delete
              </Button>
            </DropdownMenu>
          </div>
        )}
      </ButtonDropdown>
    );
  }
}
export default FolderButtonElement;
