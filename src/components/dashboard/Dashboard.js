import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.dashboardWrapper} />;
  }
}

const styles = () => ({
  dashboardWrapper: {
    display: 'flex',
    flexWrap: 'wrap'
  }
});

export default withStyles(styles)(Dashboard);
