import { faInfoCircle, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React from "react";
import { ARIAS } from "../../constants/arias";
import { COLORS } from "../../constants/colors";
import { STRINGS } from "../../constants/strings";
import { Line } from "../line/line";
import Percentage from "../percentage/percentage";
import Space from "../space/space";
import {
  AccountOverviewSalesContainer,
  AccountOverviewSalesDataContainer,
  AccountOverviewSalesHeaderContainer,
  AccountOverviewSalesLabel,
  AccountOverviewSalesLabelContainer,
  AccountOverviewSalesLinesPercentageContainer,
  AccountOverviewSalesPercentagesContainer,
  AccountOverviewSalesPhraseContainer,
  AccountOverviewSalesUploadPercentageContainer,
} from "./account-overview-sales-styles";

const { YOU_HAD, UPLOADS, AND, LINES_ADD, UPLOAD_SUCCESS, LINES_SAVED, SALES } =
  STRINGS;

const { SALES_AREA } = ARIAS;

export const AccountOverviewSales = ({
  salesOverview: { successfulUploads, linesSaved, uploads, linesAttempted },
}) => {
  return (
    <AccountOverviewSalesContainer>
      <AccountOverviewSalesDataContainer>
        <AccountOverviewSalesHeaderContainer>
          <AccountOverviewSalesLabelContainer>
            <FontAwesomeIcon icon={faUpload} color={COLORS.blueA} />
            <Space width={16} />
            <AccountOverviewSalesLabel>{SALES}</AccountOverviewSalesLabel>
          </AccountOverviewSalesLabelContainer>
          <div tabIndex={0} aria-label={SALES_AREA} />
          <FontAwesomeIcon icon={faInfoCircle} color={COLORS.greyD} />
        </AccountOverviewSalesHeaderContainer>
        <Space height={40} />
        <AccountOverviewSalesPhraseContainer tabIndex={0}>
          {YOU_HAD}&nbsp;
          <b>
            {successfulUploads} {UPLOADS}
          </b>
          &nbsp;{AND}&nbsp;<b>{linesSaved}</b>&nbsp;
          {LINES_ADD}
        </AccountOverviewSalesPhraseContainer>
      </AccountOverviewSalesDataContainer>
      <Line horizontal />
      <AccountOverviewSalesPercentagesContainer>
        <AccountOverviewSalesUploadPercentageContainer>
          <Percentage
            value={successfulUploads}
            total={uploads}
            label={UPLOAD_SUCCESS}
          />
        </AccountOverviewSalesUploadPercentageContainer>
        <Line vertical />
        <AccountOverviewSalesLinesPercentageContainer>
          <Percentage
            value={linesSaved}
            total={linesAttempted}
            label={LINES_SAVED}
          />
        </AccountOverviewSalesLinesPercentageContainer>
      </AccountOverviewSalesPercentagesContainer>
    </AccountOverviewSalesContainer>
  );
};

AccountOverviewSales.propTypes = {
  salesOverview: PropTypes.shape({
    uploads: PropTypes.number.isRequired,
    successfulUploads: PropTypes.number.isRequired,
    linesAttempted: PropTypes.number.isRequired,
    linesSaved: PropTypes.number.isRequired,
    lastUploadDate: PropTypes.number.isRequired,
  }).isRequired,
};

export default AccountOverviewSales;
