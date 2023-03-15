import { useState } from 'react';
import PropTypes from 'prop-types';

import { FeedbackContainer } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return countTotalFeedback() === 0
      ? 0
      : ((good / countTotalFeedback()) * 100).toFixed(0);
  };

  return (
    <FeedbackContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={{ good: good, neutral: neutral, bad: bad }}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        )}
      </Section>
    </FeedbackContainer>
  );
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// onLeaveFeedback = e => {
//   this.setState(prevState => ({
//     [e.target.textContent]: prevState[e.target.textContent] + 1,
//   }));
// };

// countTotalFeedback = () => {
//   return Object.values(this.state).reduce(
//     (total, item) => (total += item),
//     0
//   );
// };

// countPositiveFeedbackPercentage = () => {
//   return this.countTotalFeedback() === 0
//     ? 0
//     : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <>
// <FeedbackContainer>
//   <Section title="Please leave feedback">
//     <FeedbackOptions
//       options={this.state}
//       onLeaveFeedback={this.onLeaveFeedback}
//     />
//   </Section>
//   <Section title="Statistics">
//     {this.countTotalFeedback() === 0 ? (
//       <Notification message="There is no feedback" />
//     ) : (
//       <Statistics
//         good={good}
//         neutral={neutral}
//         bad={bad}
//         total={this.countTotalFeedback}
//         positivePercentage={this.countPositiveFeedbackPercentage}
//       />
//     )}
//   </Section>
// </FeedbackContainer>
//       </>
//     );
//   }
// }

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};
