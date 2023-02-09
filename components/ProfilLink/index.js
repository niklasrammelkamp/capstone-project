import Link from "next/link";
import styled from "styled-components";

export default function ProfilLink({ children, href }) {
  console.log(href);
  return <StyledProfilLink href={href}>{children}</StyledProfilLink>;
}
const StyledProfilLink = styled(Link)`
  display: flex;
`;
