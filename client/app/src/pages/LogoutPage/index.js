import React, { Component, PropTypes } from 'react';
import * as AppActions from 'containers/AppContainer/actions';
import Box from 'grommet-udacity/components/Box';
import Value from 'grommet-udacity/components/Value';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, WaveGoodbye, Seeya } from './styles';

class LogoutPage extends Component {
  constructor() {
    super();
    this.handleCountdown = this.handleCountdown.bind(this);
    this.state = {
      count: 3,
    };
  }
  componentDidMount() {
    this.props.actions.logoutUser();
    this.handleCountdown();
  }
  handleCountdown() {
    setInterval(() => {
      const { count } = this.state;
      this.setState({
        count: count >= 1 ? count - 1 : '🎉',
      });
      if (typeof count === 'string') {
        this.context.router.push('/');
      }
    }, 1000);
  }
  render() {
    return (
      <Container className="gradient-blue">
        <Box align="center" justify="center" pad="large">
          <WaveGoodbye>👋</WaveGoodbye>
        </Box>
        <Box align="center" justify="center" pad="large">
          <Seeya
            align="center"
            tag="h2"
          >
            See you next time!
          </Seeya>
        </Box>
        <Box align="center" justify="center">
          <Value value={this.state.count} />
        </Box>
      </Container>
    );
  }
}

LogoutPage.propTypes = {
  actions: PropTypes.object.isRequired,
};

LogoutPage.contextTypes = {
  router: PropTypes.func.isRequired,
};

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    AppActions,
    dispatch
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(LogoutPage);
