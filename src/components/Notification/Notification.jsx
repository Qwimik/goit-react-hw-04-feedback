import { StatisticText } from 'components/Statistics/Statistics.styled';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
  return <StatisticText>{message}</StatisticText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
