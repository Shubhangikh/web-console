import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
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
/* Actions */
import { registerUser } from '../../actions/UserActions';

class Register extends Component {
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
      passwordUnmatchHelperText: '',
      registrationSuccessful: false,
      signUpError: false,
      signUpErrorText: ''
    };
  }

  componentDidMount() {
    this.setState({
      registrationSuccessful: false
    });
  }

  resetForm = () => {
    this.setState({
      name: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmPassword: false,
      passwordUnmatchError: false,
      passwordUnmatchHelperText: '',
      registrationSuccessful: false,
      signUpError: false,
      signUpErrorText: ''
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, username, email, password } = this.state;
    const { registerUser } = this.props;
    registerUser(
      { name, username, email, password },
      this.handleSuccess,
      this.handleError
    )
      .then(() => this.handleSuccess())
      .catch(error => this.handleError(error));
  };

  handleSuccess = () => {
    this.resetForm();
    this.setState({
      registrationSuccessful: true
    });
  };

  handleError = response => {
    console.log('Error in Sign Up. Please try again later. ', response);
    this.setState({
      signUpError: true,
      signUpErrorText: 'Error in Sign Up. Please try again later.'
    });
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

  handleChange = field => event => {
    this.setState({ [field]: event.target.value });
  };

  handlePasswordChange = event => {
    this.setState(
      { confirmPassword: event.target.value },
      this.checkIfPasswordsMatch
    );
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.signupPage}>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          classes={{ root: classes.appName }}
        >
          {'BidBig'}
        </Typography>
        {!this.state.registrationSuccessful ? (
          <div>
            <Typography
              variant="title"
              align="center"
              classes={{ root: classes.signUpHeading }}
            >
              {'Create your BidBig Account'}
            </Typography>

            <form onSubmit={this.handleSubmit} className={classes.signUpForm}>
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
                id="userame"
                label="Username"
                value={this.state.username}
                required
                className={classes.textField}
                onChange={this.handleChange('username')}
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
                <InputLabel htmlFor="confirmPassword">
                  Re-enter password
                </InputLabel>
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
                className={classes.signUpBtn}
                type={'submit'}
              >
                {' '}
                {'Create Account'}
              </Button>
            </form>
            <Typography type="body1" align="center">
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'inherit' }}>
                Sign In
              </Link>
            </Typography>
            <Typography
              type="body1"
              align="center"
              style={{ paddingTop: '10px', color: 'red' }}
            >
              {this.state.signUpError && this.state.signUpErrorText}
            </Typography>
          </div>
        ) : (
          <Typography variant="h2" align="center">
            Congratulations! You have been successfully registered.
            <br />
            <Link to="/login" style={{ color: 'inherit' }}>
              Login
            </Link>{' '}
            {'to get started.'}
          </Typography>
        )}
      </div>
    );
  }
}

const styles = () => ({
  signupPage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 15
  },
  signUpForm: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '10px',
    alignItems: 'center'
  },
  appName: {
    marginTop: 20,
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  signUpHeading: {
    marginTop: 20,
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  textField: {
    margin: 'auto',
    width: '30vw'
  },
  signUpBtn: {
    margin: 'auto',
    width: '30vw',
    marginTop: '15px',
    marginBottom: '15px',
    padding: '5px',
    textTransform: 'none'
  }
});

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      registerUser
    },
    dispatch
  );
};

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Register)
  )
);
