import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPassword: false,
      passwordUnmatchError: false,
      passwordUnmatchHelperText: '',
      passwordResetSuccessful: false,
      signUpError: false,
      signUpErrorText: ''
    };
  }

  handleClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword
    }));
  };

  handleClickShowConfirmPassword = () => {
    this.setState(() => ({
      showConfirmPassword: !this.state.showConfirmPassword
    }));
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState(
      { confirmPassword: event.target.value },
      this.checkIfPasswordsMatch
    );
  };

  checkIfPasswordsMatch() {
    const { password, confirmPassword } = this.state;
    if (password !== confirmPassword) {
      this.setState({
        passwordUnmatchError: true,
        passwordUnmatchHelperText: 'Passwords do not match.'
      });
    } else {
      this.setState({
        passwordUnmatchError: false,
        passwordUnmatchHelperText: ''
      });
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.resetPasswordPage}>
        <form onSubmit={this.handleSubmit} className={classes.resetForm}>
          <Typography
            variant="h1"
            color="primary"
            align="center"
            classes={{ root: classes.heading }}
          >
            {'BidBig'}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            classes={{ root: classes.heading }}
          >
            {'Reset your password'}
          </Typography>
          <FormControl
            className={`${classes.textField} ${'signup-field'}`}
            required
            margin="normal"
          >
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              value={this.state.password}
              inputProps={{ minLength: 6 }}
              type={this.state.showPassword ? 'text' : 'password'}
              onChange={this.handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.handleClickShowPassword}>
                    {this.state.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl
            className={`${classes.textField} ${'main-entry-signup-field'}`}
            required
            margin="normal"
          >
            <InputLabel htmlFor="confirmPassword">Re-enter password</InputLabel>
            <Input
              id="confirmPassword"
              className="entry-signup-confirmpassword"
              value={this.state.confirmPassword}
              inputProps={{ minLength: 6 }}
              type={this.state.showConfirmPassword ? 'text' : 'password'}
              onChange={this.handlePasswordChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={this.handleClickShowConfirmPassword}>
                    {this.state.showConfirmPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
            {this.state.passwordUnmatchError && (
              <FormHelperText error={true}>
                {' '}
                {this.state.passwordUnmatchHelperText}{' '}
              </FormHelperText>
            )}
          </FormControl>

          <Button
            variant="contained"
            color={'primary'}
            className={classes.resetBtn}
            type={'submit'}
          >
            {' '}
            {'Reset Password'}
          </Button>
        </form>
      </div>
    );
  }
}

const styles = () => ({
  resetPasswordPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15
  },
  resetForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px',
    alignItems: 'center'
  },
  heading: {
    marginTop: 20,
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  textField: {
    margin: 'auto',
    width: '30vw'
  },
  resetBtn: {
    margin: 'auto',
    width: '30vw',
    marginTop: '15px',
    marginBottom: '15px',
    padding: '5px',
    textTransform: 'none'
  }
});

export default withStyles(styles)(ResetPassword);
