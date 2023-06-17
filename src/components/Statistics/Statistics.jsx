import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
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
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
