import AT from './ActionTypes';

export const openItemsDialog = () => {
  return {
    type: AT.ITEMS_DIALOG_OPEN
  };
};

export const closeItemsDialog = () => {
  return {
    type: AT.ITEMS_DIALOG_CLOSE
  };
};
