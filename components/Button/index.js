import StyledButton from "./StyledButton";
import Link from "next/link";

// Thanks @doemser for this
export default function Button(props) {
  // The component decides whether a button or an anchor is rendered,
  // based on whether an href prop was passed through.
  return (
    <StyledButton as={props.href && Link} {...props}>
      {props.children}
    </StyledButton>
  );
}
