import PropTypes from "prop-types";
import {
  PercentageContainer,
  PercentageLabel,
  PercentageNumber,
} from "./percentage-styles";

const getPercentage = (value, total) => {
  return (value / total) * 100;
};

const Percentage = ({ value, total, label }) => {
  return (
    <PercentageContainer>
      <PercentageNumber>{`${getPercentage(value, total)}%`}</PercentageNumber>
      <PercentageLabel>{label}</PercentageLabel>
    </PercentageContainer>
  );
};

Percentage.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Percentage;
