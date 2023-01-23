import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { greyE } = COLORS;

export const HorizontalLine = styled.div`
  display: flex;
  height: 2px;
  width: 100%;
  background-color: ${greyE};
`;

export const VerticalLine = styled.div`
  display: flex;
  width: 2px;
  background-color: ${greyE};
`;
