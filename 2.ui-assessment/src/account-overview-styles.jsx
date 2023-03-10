import styled from "styled-components";
import { COLORS } from "./constants/colors";

const { greyA } = COLORS;

export const AccountOverviewContainer = styled.div`
  background-color: ${greyA};
  display: flex;
  flex-direction: column;

  @media (max-width: 1320px) {
    width: 50%;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 1300px) {
    width: 90%;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 900px) {
    width: 95%;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: 850px) {
    width: 100%;
    align-items: center;
    justify-content: flex-start;
  }
`;
