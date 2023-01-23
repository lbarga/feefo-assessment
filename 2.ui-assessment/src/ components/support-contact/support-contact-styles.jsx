import styled from "styled-components";
import { COLORS } from "../../constants/colors";

const { greyB, blackA, yellowA, greyC } = COLORS;

export const SupportContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`;

export const SupportContactTitle = styled.h2`
  font-size: 16px;
  color: ${greyB};

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`;

export const SupportContactIcon = styled.div`
  background-color: ${yellowA};
  min-width: 64px;
  width: auto;
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: ${blackA};
  font-weight: bold;
  border-radius: 10px;
`;

export const SupportContactInfoContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    padding: 0px 8px;
  }
`;

export const SupportContactInfoDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 0px;
`;

export const SupportContactInfoDataSupportLabel = styled.p`
  font-size: 16px;
  color: ${greyC};
  font-weight: bold;
`;

export const SupportContactInfoDataLabelsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const SupportContactInfoDataEmailLabelCotainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SupportContactInfoDataEmailLabel = styled.p`
  font-size: 16px;
  color: ${greyC};
`;
