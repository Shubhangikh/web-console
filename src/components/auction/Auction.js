import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppHeader from '../common/AppHeader';
import ManageAuctionSchedule from './ManageAuctionSchedule';
import ItemAuction from './ItemAuction';

class Auction extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppHeader />
        <div className={classes.wrapper}>
          <ManageAuctionSchedule />
          {/* <ItemAuction /> */}
        </div>
      </Fragment>
    );
  }
}

const styles = () => ({
  wrapper: {
    display: 'flex',
    padding: '70px 50px 50px 50px',
    flexDirection: 'column'
  }
});

export default withStyles(styles)(Auction);
