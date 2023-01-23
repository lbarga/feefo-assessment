import { render, screen } from "@testing-library/react";
import SupportContact from "./support-contact";

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

test("SupportContact render correctly", () => {
  render(
    <SupportContact
      email={mockData.supportContact.email}
      name={mockData.supportContact.email}
    />
  );

  const supportEmail = screen.getByText(/john.smith@feefo.com/i);
  const supportInital = screen.getAllByText(/J/i);

  expect(supportEmail).toBeInTheDocument();
  expect(supportInital[0]).toBeInTheDocument();
});
