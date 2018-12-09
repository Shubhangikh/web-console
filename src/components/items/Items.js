import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from '@material-ui/core/Typography';
import AppHeader from '../common/AppHeader';
import Item from './Item';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Add from '@material-ui/icons/Add';
import ItemsDialog from './ItemsDialog';
import TablePagination from '@material-ui/core/TablePagination';
import { openItemsDialog, closeItemsDialog } from '../../actions/ItemsActions';
import { fetchAllItems } from '../../actions/ItemsActions';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  componentDidMount() {
    const { username, pageIndex, pageSize } = this.props;
    this.props.fetchAllItems(username, pageIndex, pageSize);
  }
  handlePostNewItem = () => {
    this.props.openItemsDialog();
  };
  handleChangePage = (event, page) => {
    const { fetchAllItems, pageSize, item } = this.props;
    fetchAllItems(item.username, page, pageSize);
  };
  handleChangeRowsPerPage = event => {
    const { fetchAllItems, item } = this.props;
    fetchAllItems(item.username, 0, event.target.value);
  };
  render() {
    const { classes, itemsDialogOpen, closeItemsDialog, items } = this.props;
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
          <TablePagination
            classes={{ root: classes.pagination }}
            component="div"
            count={100}
            rowsPerPage={this.props.pageSize}
            page={this.props.pageIndex}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            labelRowsPerPage={'Items per page'}
          />
          {items &&
            items.map(item => {
              return (
                <Item
                  item={item}
                  openModal={this.openModal}
                  closeModal={this.closeModal}
                />
              );
            })}
          <ItemsDialog
            itemsDialogOpen={itemsDialogOpen}
            closeItemsDialog={closeItemsDialog}
            fetchAllItems={fetchAllItems}
          />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    itemsDialogOpen: state.items.itemsDialogOpen,
    pageSize: state.items.pageSize || 10,
    pageIndex: state.items.pageIndex || 0,
    items: state.items.items,
    username: state.user.username
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      openItemsDialog,
      closeItemsDialog,
      fetchAllItems
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
  },
  pagination: {
    display: 'flex',
    justifyContent: 'center'
  }
});

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Items)
);
