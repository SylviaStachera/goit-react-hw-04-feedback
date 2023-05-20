import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

const { Component } = require('react');

class FeedbackOptions extends Component {
  static defaultProps = {
    options: [],
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  };

  render() {
    const { options, onLeaveFeedback } = this.props;

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
  }
}

export default FeedbackOptions;
