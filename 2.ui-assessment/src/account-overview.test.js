import { render, screen } from "@testing-library/react";
import AccountOverview from "./account-overview";

const mockData = {
  supportContact: {
    name: "John Smith",
    email: "john.smith@feefo.com",
  },
  salesOverview: {
    uploads: 8,
    successfulUploads: 3,
    linesAttempted: 20,
    linesSaved: 4,
    lastUploadDate: 1605001226079,
  },
};

test("AccountOverview render correctly", () => {
  render(<AccountOverview data={mockData} />);
  const accountOverviewTitle = screen.getByText(/Account Overview/i);
  const supportEmail = screen.getByText(/john.smith@feefo.com/i);
  const supportInital = screen.getAllByText(/J/i);

  expect(accountOverviewTitle).toBeInTheDocument();
  expect(supportEmail).toBeInTheDocument();
  expect(supportInital[0]).toBeInTheDocument();
});
