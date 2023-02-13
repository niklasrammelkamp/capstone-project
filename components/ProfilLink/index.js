import Link from "next/link";
import styled from "styled-components";

export default function ProfilLink({ children, href }) {
  return <StyledProfilLink href={href}>{children}</StyledProfilLink>;
}
const StyledProfilLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: inherit;
  img {
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }

  div p {
    margin: 0;
  }

  div p:last-child {
    color: var(--grey);
    font-size: 0.76rem;
  }
`;
