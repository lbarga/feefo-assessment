import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { greyB } = COLORS;

export const AccountOverviewSalesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 4px;
  min-width: 100%;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const AccountOverviewSalesDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

export const AccountOverviewSalesHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const AccountOverviewSalesLabelContainer = styled.div`
  display: flex;
`;

export const AccountOverviewSalesLabel = styled.p`
  font-weight: bold;
`;

export const AccountOverviewSalesPhraseContainer = styled.p`
  display: flex;
  font-size: 16px;
  color: ${greyB};
`;

export const AccountOverviewSalesPercentagesContainer = styled.div`
  display: flex;
`;

export const AccountOverviewSalesUploadPercentageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100px;
`;

export const AccountOverviewSalesLinesPercentageContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100px;
`;
