import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { greyC } = COLORS;

export const AccountOverviewHeaderContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AccountOverviewHeaderTitle = styled.h1`
  font-size: 32px;
  font-weight: normal;
  color: ${greyC};
`;
