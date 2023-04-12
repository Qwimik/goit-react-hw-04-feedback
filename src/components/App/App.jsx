import { useState } from 'react';

import { FeedbackContainer } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });

  const onLeaveFeedback = e => {
    switch (e.target.textContent) {
      case 'good':
        setGood(() => good + 1);
        break;
      case 'neutral':
        setNeutral(() => neutral + 1);
        break;
      case 'bad':
        setBad(() => bad + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    return Number(good + neutral + bad);
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : Number(((good / countTotalFeedback()) * 100).toFixed(0));
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </FeedbackContainer>
  );
}
