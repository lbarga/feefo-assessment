import { HorizontalLine, VerticalLine } from "./line-styles";

export const Line = ({ vertical, horizontal }) => {
  if (horizontal) {
    return <HorizontalLine />;
  }

  if (vertical) {
    return <VerticalLine />;
  }
};
