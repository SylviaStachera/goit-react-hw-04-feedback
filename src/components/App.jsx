import Section from './Section/Section';
import Notification from './Notification/Notification';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import { Component } from 'react';

export class App extends Component {
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
    this.setState(
      (state, props) => ({
        [stateKey]: state[stateKey] + props.step,
      }),

      () => {
        this.countTotalFeedback();
      }
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    this.setState({ total });
    this.countPositiveFeedbackPercentage(total);
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    const positivePercentage = ((good / total) * 100).toFixed(0);
    this.setState({ positivePercentage });
  };

  noFeedback = () => {
    const { good, neutral, bad } = this.state;

    if (good === 0 && neutral === 0 && bad === 0) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    const { good, neutral, bad, total, positivePercentage } = this.state;

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleButtonClick}
          />
          {this.noFeedback() ? (
            <Notification message="There is no feedback!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
