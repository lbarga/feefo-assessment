import PropTypes from "prop-types";
import React from "react";
import { STRINGS } from "../../constants/strings";
import Space from "../space/space";
import SupportContact from "../support-contact/support-contact";
import {
  AccountOverviewHeaderContainer,
  AccountOverviewHeaderTitle,
} from "./account-overview-header-styles";

const { ACCOUNT_OVERVIEW } = STRINGS;

export const AccountOverviewHeader = ({ supportContact }) => {
  return (
    <AccountOverviewHeaderContainer>
      <AccountOverviewHeaderTitle tabIndex={0} aria-label={ACCOUNT_OVERVIEW}>
        {ACCOUNT_OVERVIEW}
      </AccountOverviewHeaderTitle>
      <Space width={80} />
      <SupportContact name={supportContact.name} email={supportContact.email} />
    </AccountOverviewHeaderContainer>
  );
};

AccountOverviewHeader.propTypes = {
  supportContact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default AccountOverviewHeader;
