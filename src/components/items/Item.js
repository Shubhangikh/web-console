import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import DateRange from '@material-ui/icons/DateRange';
import {
  getImage,
  deleteItem,
  fetchAllItems,
  setSelectedItem
} from '../../actions/ItemsActions';

class Item extends Component {
  state = {
    source: null
  };
  componentDidMount() {
    this.props
      .getImage(`/items/downloadImage/${this.props.item.imageLocation}`)
      .then(response => {
        const base64 = btoa(
          new Uint8Array(response.data).reduce(
            (data, byte) => data + String.fromCharCode(byte),
            ''
          )
        );
        this.setState({ source: 'data:;base64,' + base64 });
      });
  }

  handleItemEdit = item => {
    this.props.setSelectedItem(item);
    this.props.openModal();
  };

  handleItemDelete = itemId => {
    this.props
      .deleteItem(itemId)
      .then(() => {
        this.props.fetchAllItems(
          this.props.item.username,
          0,
          this.props.pageSize
        );
      })
      .catch(error => {
        console.log('Error deleting the item ', error);
      });
  };

  render() {
    const { classes, item } = this.props;
    return (
      <div className={classes.pageWrapper}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container spacing={16}>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img
                    className={classes.img}
                    alt={item.itemId}
                    src={this.state.source}
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={16}>
                  <Grid item xs>
                    <Typography gutterBottom variant="h4">
                      {item.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                      {item.description}
                    </Typography>
                    <Typography color="textSecondary">
                      ID: {item.itemId}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">
                      Minimum Bidding Price: {`$${item.minBidPrice}`}
                    </Typography>
                    <Typography variant="subtitle1">
                      Date Added: {item.created}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Tooltip
                      title={'Schedule an Auction'}
                      aria-label={'Schedule this item for auction'}
                    >
                      <Fab color="secondary" className={classes.timer}>
                        <DateRange />
                      </Fab>
                    </Tooltip>
                    <Tooltip title={'Edit'} aria-label={'Edit'}>
                      <Fab color="secondary" className={classes.edit}>
                        <Edit />
                      </Fab>
                    </Tooltip>
                    <Tooltip title={'Delete'} aria-label={'Delete'}>
                      <Fab
                        color="secondary"
                        className={classes.delete}
                        onClick={this.handleItemDelete(item.itemId)}
                      >
                        <Delete />
                      </Fab>
                    </Tooltip>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
          ))
        </div>
      </div>
    );
  }
}

const styles = () => ({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column'
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  paper: {
    padding: 20,
    margin: '40px 10px 10px 0',
    maxWidth: 500
  },
  image: {
    width: 128,
    height: 128
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%'
  },
  edit: {
    background: '#6fdc6f',
    marginRight: 5
  },
  delete: {
    background: '#ff4d4d',
    marginRight: 5
  },
  timer: {
    background: '#ffa31a',
    marginRight: 5
  }
});

const mapStateToProps = (state, ownProps) => {
  return {
    pageSize: state.items.pageSize,
    pageIndex: state.items.pageIndex
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      getImage,
      deleteItem,
      fetchAllItems,
      setSelectedItem
    },
    dispatch
  );
};

export default withStyles(styles)(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Item)
);
