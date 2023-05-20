import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const { Component } = require('react');

class Statistics extends Component {
  static defaultProps = {
    total: 0,
    positivePercentage: 0,
  };

  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <h3>Statistics</h3>
        <ul>
          <li className={css['statistics-item']}>Good: {good}</li>
          <li className={css['statistics-item']}>Neutral: {neutral}</li>
          <li className={css['statistics-item']}>Bad: {bad}</li>
          <li className={css['statistics-item']}>Total: {total}</li>
          <li className={css['statistics-item']}>
            Positive feedback: {positivePercentage}%
          </li>
        </ul>
      </div>
    );
  }
}

export default Statistics;
