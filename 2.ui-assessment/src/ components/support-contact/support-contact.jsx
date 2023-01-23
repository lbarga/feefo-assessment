import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { COLORS } from "../../constants/colors";
import { STRINGS } from "../../constants/strings";
import Space from "../space/space";
import {
  SupportContactContainer,
  SupportContactIcon,
  SupportContactInfoContainer,
  SupportContactInfoDataContainer,
  SupportContactInfoDataEmailLabel,
  SupportContactInfoDataEmailLabelCotainer,
  SupportContactInfoDataLabelsContainer,
  SupportContactInfoDataSupportLabel,
  SupportContactTitle,
} from "./support-contact-styles";

const { FEEFO_SUPPORT_CONTACT, SUPPORT, SUPPORT_NUMBER } = STRINGS;

export const SupportContact = ({ name, email }) => {
  return (
    <SupportContactContainer>
      <SupportContactTitle>{FEEFO_SUPPORT_CONTACT}</SupportContactTitle>
      <Space height={16} />
      <SupportContactInfoContainer>
        <SupportContactIcon>{name.split("")[0]}</SupportContactIcon>
        <Space width={16} />
        <SupportContactInfoDataContainer>
          <SupportContactInfoDataSupportLabel>
            {SUPPORT}
          </SupportContactInfoDataSupportLabel>
          <Space height={8} />
          <SupportContactInfoDataLabelsContainer>
            <SupportContactInfoDataEmailLabelCotainer>
              <FontAwesomeIcon icon={faEnvelope} color={COLORS.greyC} />
              <Space width={16} />
              <SupportContactInfoDataEmailLabel>
                {email}
              </SupportContactInfoDataEmailLabel>
              <Space width={24} />
              <SupportContactInfoDataEmailLabel>
                {SUPPORT_NUMBER}
              </SupportContactInfoDataEmailLabel>
            </SupportContactInfoDataEmailLabelCotainer>
          </SupportContactInfoDataLabelsContainer>
        </SupportContactInfoDataContainer>
      </SupportContactInfoContainer>
    </SupportContactContainer>
  );
};

SupportContact.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default SupportContact;
