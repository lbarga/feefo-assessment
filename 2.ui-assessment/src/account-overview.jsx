import PropTypes from "prop-types";
import React from "react";
import { AccountOverviewHeader } from "./ components/account-overview-header/account-overview-header";
import AccountOverviewSales from "./ components/account-overview-sales/account-overview-sales";
import Space from "./ components/space/space";
import { AccountOverviewContainer } from "./account-overview-styles";

export const AccountOverview = ({
  data: { supportContact, salesOverview },
}) => {
  return (
    <AccountOverviewContainer>
      <AccountOverviewHeader supportContact={supportContact} />
      <Space height={48} />
      <AccountOverviewSales salesOverview={salesOverview} />
    </AccountOverviewContainer>
  );
};

AccountOverview.propTypes = {
  data: PropTypes.shape({
    supportContact: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
    salesOverview: PropTypes.shape({
      uploads: PropTypes.number.isRequired,
      successfulUploads: PropTypes.number.isRequired,
      linesAttempted: PropTypes.number.isRequired,
      linesSaved: PropTypes.number.isRequired,
      lastUploadDate: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default AccountOverview;
