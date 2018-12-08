import React, { Component } from 'react';
import Modal from '@material-ui/core/Modal';
import ItemsForm from './ItemsForm';

class ItemsDialog extends Component {
  render() {
    const { itemsDialogOpen, closeItemsDialog } = this.props;
    return (
      <Modal
        aria-labelledby="Items"
        aria-describedby="Post a new Item"
        open={itemsDialogOpen ? itemsDialogOpen : false}
        onClose={closeItemsDialog}
        disableAutoFocus
      >
        <ItemsForm onClose={closeItemsDialog} />
      </Modal>
    );
  }
}

export default ItemsDialog;
