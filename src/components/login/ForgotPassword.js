import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  resetForm = () => {
    this.setState({
      email: ''
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.formWrapper}>
        <form
          onSubmit={this.handleSubmit}
          className={classes.forgotPasswordForm}
        >
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
            {'Did you forget your password?'}
          </Typography>
          <Typography
            variant="subheading"
            align="center"
            classes={{ root: classes.heading }}
          >
            {
              'Provide your email address and we will send you a link to reset your password'
            }
          </Typography>
          <TextField
            id="email"
            type="email"
            label="Email"
            value={this.state.email}
            required
            className={classes.textField}
            onChange={this.handleChange('email')}
          />
          <Button
            variant="contained"
            color={'primary'}
            className={classes.resetBtn}
            type={'submit'}
          >
            {'Reset Password'}
          </Button>
          <Typography variant="body1" align="center">
            Go back to{' '}
            <Link to="/login" style={{ color: 'inherit' }}>
              Login
            </Link>
          </Typography>
        </form>
      </div>
    );
  }
}

const styles = () => ({
  formWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  forgotPasswordForm: {
    display: 'flex',
    margin: 'auto',
    flexDirection: 'column',
    width: '40vw'
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
  return bindActionCreators({}, dispatch);
};

export default withRouter(
  withStyles(styles)(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(ForgotPassword)
  )
);
