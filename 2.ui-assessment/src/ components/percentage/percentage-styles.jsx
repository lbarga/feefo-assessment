import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { greenA, greyB } = COLORS;

export const PercentageContainer = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
`;

export const PercentageNumber = styled.p`
  display: flex;
  color: ${greenA};
  font-weight: bold;
  font-size: 40px;
`;
export const PercentageLabel = styled.p`
  display: flex;
  color: ${greyB};
  font-weight: bold;
  font-size: 16px;
`;
