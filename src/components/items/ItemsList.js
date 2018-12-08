import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import DateRange from '@material-ui/icons/DateRange';
import TablePagination from '@material-ui/core/TablePagination';

class Items extends Component {
  state = {
    page: 0,
    rowsPerPage: 5
  };
  handleChangePage = (event, page) => {
    this.setState({ page });
  };
  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };
  render() {
    const { classes } = this.props;
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return (
      <div className={classes.pageWrapper}>
        <TablePagination
          classes={{ root: classes.pagination }}
          component="div"
          count={100}
          rowsPerPage={10}
          page={0}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          labelRowsPerPage={'Items per page'}
        />
        <div className={classes.root}>
          {items.map(item => (
            <Paper key={item} className={classes.paper}>
              <Grid container spacing={16}>
                <Grid item>
                  <ButtonBase className={classes.image}>
                    <img
                      className={classes.img}
                      alt="1030114"
                      src="/items/downloadImage/chair1543519143318_3.jpg"
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h4">
                        Pepperfry Wooden Chair
                      </Typography>
                      <Typography variant="h5" gutterBottom>
                        A durable, brown colored wooden chair by Pepperfry
                      </Typography>
                      <Typography color="textSecondary">ID: 1030114</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1">
                        Minimum Bidding Price: $19.00
                      </Typography>
                      <Typography variant="subtitle1">
                        Date Added: 12/05/2018
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
                        <Fab color="secondary" className={classes.delete}>
                          <Delete />
                        </Fab>
                      </Tooltip>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ))}
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
  pagination: {
    display: 'flex',
    justifyContent: 'center'
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

export default withStyles(styles)(Items);
