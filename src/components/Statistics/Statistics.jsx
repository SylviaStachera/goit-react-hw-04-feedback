import css from './Statistics.module.css';
const { Component } = require('react');

class Statistics extends Component {
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
