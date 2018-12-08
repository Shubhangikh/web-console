import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class CurrentBidding extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.wrapper}>Live Bidding</div>;
  }
}

const styles = () => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default withStyles(styles)(CurrentBidding);
