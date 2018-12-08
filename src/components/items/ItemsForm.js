import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

class ItemsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      minBidPrice: '',
      image: null,
      heading: 'Post New Item',
      buttonText: 'Create'
    };
  }

  handleChange = (e, field) => {
    this.setState({
      [field]: e.target.value
    });
  };

  render() {
    const { classes, onClose } = this.props;
    return (
      <div className={classes.paper}>
        <Card className={classes.card}>
          <CardHeader
            subheader={this.state.heading}
            classes={{ subheader: classes.header }}
          />
          <Divider />
          <CardContent classes={{ root: classes.cardContent }}>
            <form onSubmit={this.handleSubmit} className={classes.itemForm}>
              <TextField
                id="name"
                type="text"
                label="Name"
                inputProps={{ maxLength: 255 }}
                value={this.state.name}
                required
                className={classes.textField}
                onChange={e => this.handleChange(e, 'name')}
              />
              <TextField
                id="description"
                type="text"
                label="Description"
                required
                value={this.state.description}
                className={classes.textField}
                onChange={e => this.handleChange(e, 'description')}
              />
              <TextField
                id="minBidPrice"
                type="number"
                step="0.01"
                label="Bidding Price ($)"
                value={this.state.minBidPrice}
                className={classes.textField}
                onChange={e => this.handleChange(e, 'minBidPrice')}
              />
              <div className={classes.btnWrapper}>
                <Button
                  variant="contained"
                  color={'primary'}
                  className={classes.dialogBtn}
                  type={'submit'}
                >
                  {this.state.buttonText}
                </Button>
                <Button
                  variant="contained"
                  color={'primary'}
                  className={classes.dialogBtn}
                  onClick={onClose}
                >
                  {'Cancel'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = () => ({
  paper: {
    position: 'absolute',
    backgroundColor: '#FFF',
    padding: '0px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    outline: 'none',
    borderRadius: 4
  },
  card: {
    background: '#FFF',
    outline: 'none',
    overflow: 'initial'
  },
  cardContent: {
    padding: '0 10px',
    '&:last-child': {
      paddingBottom: 0
    }
  },
  itemForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start'
  },
  header: {
    fontFamily: 'Lucida Console, Monaco, monospace',
    fontSize: 20
  },
  textField: {
    width: '30vw'
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  },
  dialogBtn: {
    margin: '15px 5px 15px 0',
    padding: '5px',
    textTransform: 'none'
  }
});

export default withStyles(styles)(ItemsForm);
