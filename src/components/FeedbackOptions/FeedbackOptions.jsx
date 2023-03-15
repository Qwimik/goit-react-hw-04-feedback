import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(item => {
    return (
      <FeedbackBtn type="button" key={item} onClick={onLeaveFeedback}>
        {item}
      </FeedbackBtn>
    );
  });
};
