import PropTypes from 'prop-types';
import css from './Notification.module.css';

const { Component } = require('react');

class Notification extends Component {
  static defaultProps = {
    message: '',
  };

  static propTypes = {
    message: PropTypes.string.isRequired,
  };

  render() {
    const { message } = this.props;
    return <h3 className={css.header}>{message}</h3>;
  }
}

export default Notification;
