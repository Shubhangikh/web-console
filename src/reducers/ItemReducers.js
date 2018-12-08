import AT from '../actions/ActionTypes';

const itemsDefaults = {
  itemsDialogOpen: false
};

export const items = (state = { itemsDefaults }, action) => {
  switch (action.type) {
    case AT.ITEMS_DIALOG_OPEN:
      return {
        ...state,
        itemsDialogOpen: true
      };
    case AT.ITEMS_DIALOG_CLOSE:
      return {
        ...state,
        itemsDialogOpen: false
      };
    default:
      return state;
  }
};
