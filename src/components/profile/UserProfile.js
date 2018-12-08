import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppHeader from '../common/AppHeader';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      passwordUnmatchError: false,
      passwordUnmatchHelperText: ''
    };
  }
  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <AppHeader />
        <div className={classes.wrapper}>
          <Typography
            variant="title"
            align="left"
            classes={{ root: classes.profileHeading }}
          >
            {'My Profile'}
          </Typography>

          <form onSubmit={this.handleSubmit} className={classes.userForm}>
            <TextField
              id="username"
              type="text"
              label="Username"
              value={this.state.username}
              disabled
              className={classes.textField}
              onChange={this.handleChange('username')}
            />
            <TextField
              id="name"
              type="text"
              label="Name"
              inputProps={{ maxLength: 255 }}
              value={this.state.name}
              required
              className={classes.textField}
              onChange={this.handleChange('name')}
            />

            <TextField
              id="email"
              type="email"
              label="Email"
              value={this.state.email}
              required
              className={`${classes.textField} ${'login-email'}`}
              onChange={this.handleChange('email')}
            />
            <div className={classes.btnWrapper}>
              <Button
                variant="contained"
                color={'primary'}
                className={classes.profileBtn}
                type={'submit'}
              >
                {'Update Profile'}
              </Button>
              <Button
                variant="contained"
                color={'primary'}
                className={classes.profileBtn}
                type={'reset'}
              >
                {'Clear'}
              </Button>
            </div>
          </form>
        </div>
      </Fragment>
    );
  }
}

const styles = () => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '70px 50px 50px 50px'
  },
  userForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px',
    justifyContent: 'flex-start'
  },
  profileHeading: {
    marginTop: 20,
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  textField: {
    width: '30vw'
  },
  btnWrapper: {
    display: 'flex',
    flexDirection: 'row',
    width: '30vw'
  },
  profileBtn: {
    margin: '15px 5px 15px 0',
    padding: '5px',
    textTransform: 'none'
  }
});

export default withStyles(styles)(UserProfile);
