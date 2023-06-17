import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options = [], onLeaveFeedback }) => {
  return (
    <ul className={css['btn-list']}>
      {options.map(option => (
        <li key={nanoid()}>
          <button
            className={css['btn-feedback']}
            type="button"
            onClick={() => onLeaveFeedback(`${option}`)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default FeedbackOptions;
