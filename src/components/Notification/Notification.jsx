import PropTypes from 'prop-types';
import css from './Notification.module.css';

const { Component } = require('react');

const Notification = ({ message = '' }) => {
  return <h3 className={css.header}>{message}</h3>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
