import styled from "styled-components";
import { COLORS } from "./constants/colors";

const { greyA } = COLORS;

export const AccountOverviewContainer = styled.div`
  background-color: ${greyA};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  padding: 8px;

  @media (max-width: 768px) {
    align-items: center;
    justify-content: flex-start;
  }
`;
