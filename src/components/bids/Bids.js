import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Bids extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.wrapper}>Bids</div>;
  }
}

const styles = () => ({
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default withStyles(styles)(Bids);
