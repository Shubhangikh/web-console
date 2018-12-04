import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
/* Actions */
import { loginUser } from '../../actions/UserActions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorFlag: false,
      errorMessage: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const { loginUser } = this.props;
    loginUser({ email, password })
      .then(() => this.handleSuccess())
      .catch(error => this.handleError(error));
  };

  handleSuccess = () => {
    this.resetForm();
    const { location, history } = this.props;
    history.push('/dashboard');
  };

  handleError = response => {
    this.setState({
      errorFlag: true,
      errorMessage: 'Email or Password is incorrect.  Please try again.',
      resendFlag: false
    });
  };

  resetForm = () => {
    this.setState({
      email: '',
      password: '',
      errorFlag: false,
      errorMessage: ''
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.loginFormWrapper}>
        <Typography
          variant="h1"
          color="primary"
          align="center"
          classes={{ root: classes.appName }}
        >
          {'BidBig'}
        </Typography>
        <form onSubmit={this.handleSubmit} className={classes.loginForm}>
          <TextField
            id="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
            className={`${classes.textField} ${'login-email'}`}
            onChange={this.handleChange('email')}
          />
          <TextField
            id="password"
            type="password"
            label="Password"
            value={this.state.password}
            required
            className={`${classes.textField} ${'login-password'}`}
            onChange={this.handleChange('password')}
          />
          <Button
            variant="contained"
            color={'primary'}
            className={classes.loginBtn}
            type={'submit'}
          >
            {' '}
            {'Login'}
          </Button>
        </form>
        {this.state.errorFlag && (
          <Typography variant="body1" color="error" align="center">
            {' '}
            {this.state.errorMessage}
            {'  '}
          </Typography>
        )}
        <Typography variant="body1" color="inherit" align="center">
          Don't have an account yet?{' '}
          <Link to="/register" style={{ color: 'inherit' }}>
            Register Here
          </Link>
        </Typography>
        <Typography variant="body1" color="inherit" align="center">
          Forgot password?
          {'  '}
          <Link to="/forgot-password" style={{ color: 'inherit' }}>
            Reset Password
          </Link>
        </Typography>
      </div>
    );
  }
}

const styles = () => ({
  loginFormWrapper: {
    // border: '1px solid #888',
    display: 'flex',
    margin: 'auto',
    marginTop: '20px',
    flexDirection: 'column',
    width: '40vw',
    padding: 15
    // borderRadius: 10,
    // boxShadow: '0 8px 6px -6px black'
  },
  loginForm: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '40vw'
  },
  appName: {
    fontFamily: 'Lucida Console, Monaco, monospace'
  },
  textField: {
    margin: 'auto',
    width: '30vw'
  },
  loginBtn: {
    margin: 'auto',
    marginTop: '15px',
    marginBottom: '15px',
    padding: '5px',
    width: '30vw'
  }
});

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      loginUser
    },
    dispatch
  );
};

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(Login)
  )
);
