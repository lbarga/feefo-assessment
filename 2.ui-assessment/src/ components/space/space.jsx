import PropTypes from "prop-types";
import React from "react";

export const Space = ({ height, width }) => {
  return <div style={{ height, width }} />;
};

Space.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
};

export default Space;
