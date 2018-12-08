import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppHeader from '../common/AppHeader';
import MenuItem from './MenuItem';

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppHeader />
        <div className={classes.homeWrapper}>
          <MenuItem
            name={'Profile'}
            description={'View and Manage your profile'}
            path={'/profile'}
          />
          <MenuItem
            name={'Items'}
            description={'Post and Manage your items'}
            path={'/items'}
          />
          {/* <MenuItem
            name={'Auction Item'}
            description={'Select a schedule for auctioning your item'}
            path={'/auctions'}
          /> */}
          <MenuItem
            name={'Auctions'}
            description={'Manage Auction schedules'}
            path={'/auctions'}
          />
          <MenuItem
            name={'Bids'}
            description={'View Bid Details for an item'}
            path={'/bids'}
          />
          <MenuItem
            name={'Live Bidding'}
            description={'View and participate in live bidding'}
            path={'/current-bidding'}
          />
        </div>
      </Fragment>
    );
  }
}

const styles = () => ({
  homeWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '70px 50px 50px 50px'
  }
});

export default withStyles(styles)(Home);
