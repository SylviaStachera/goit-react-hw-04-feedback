import css from './CollectStatistic.module.css';
const { Component } = require('react');

class CollectStatistic extends Component {
  static defaultProps = {
    step: 1,
  };

  constructor() {
    super();

    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleButtonClick = stateKey => {
    this.setState((state, props) => ({
      [stateKey]: state[stateKey] + props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.wrapper}>
        <h2 className={css.header}>Please leave feedback</h2>

        <ul className={css['btn-list']}>
          <li>
            <button
              className={css['btn-feedback']}
              type="button"
              onClick={() => this.handleButtonClick('good')}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className={css['btn-feedback']}
              type="button"
              onClick={() => this.handleButtonClick('neutral')}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className={css['btn-feedback']}
              type="button"
              onClick={() => this.handleButtonClick('bad')}
            >
              Bad
            </button>
          </li>
        </ul>

        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bas: {bad}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default CollectStatistic;
