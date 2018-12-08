import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import AppHeader from '../common/AppHeader';
import ItemsList from './ItemsList';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import ItemsDialog from './ItemsDialog';
import { openItemsDialog, closeItemsDialog } from '../../actions/ItemsActions';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  handlePostNewItem = () => {
    this.props.openItemsDialog();
  };
  render() {
    const { classes, itemsDialogOpen, closeItemsDialog } = this.props;
    return (
      <Fragment>
        <AppHeader />
        <div className={classes.wrapper}>
          <div className={classes.titleBarWrapper}>
            <Typography
              variant="h3"
              align="left"
              classes={{ root: classes.title }}
            >
              {'My Items'}
            </Typography>
            <Tooltip title={'Add New Item'} aria-label={'Add New Item'}>
              <Fab color="secondary" className={classes.add}>
                <Add onClick={this.handlePostNewItem} />
              </Fab>
            </Tooltip>
          </div>
          <ItemsList openModal={this.openModal} closeModal={this.closeModal} />
          <ItemsDialog
            itemsDialogOpen={itemsDialogOpen}
            closeItemsDialog={closeItemsDialog}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsDialogOpen: state.items.itemsDialogOpen
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openItemsDialog,
      closeItemsDialog
    },
    dispatch
  );
};

const styles = () => ({
  wrapper: {
    display: 'flex',
    padding: '70px 50px 50px 50px',
    flexDirection: 'column'
  },
  titleBarWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between'
  },
  title: {
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  add: {
    background: '#0088cc'
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Items)
);
