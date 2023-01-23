import PropTypes from "prop-types";
import { ARIAS } from "../../constants/arias";
import {
  PercentageContainer,
  PercentageLabel,
  PercentageNumber,
} from "./percentage-styles";

const { YOUR, PERCENTAGE_IS } = ARIAS;

const getPercentage = (value, total) => {
  return (value / total) * 100;
};

const Percentage = ({ value, total, label }) => {
  const percentage = getPercentage(value, total);

  return (
    <>
      <div
        tabIndex={0}
        aria-label={`${YOUR}${label}${PERCENTAGE_IS}${percentage}%`}
      />
      <PercentageContainer>
        <PercentageNumber>{`${percentage}%`}</PercentageNumber>
        <PercentageLabel>{label}</PercentageLabel>
      </PercentageContainer>
    </>
  );
};

Percentage.propTypes = {
  value: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default Percentage;
