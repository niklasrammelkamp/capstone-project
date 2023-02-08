import SVGIcon from "@/components/SVGIcon";
import styled, { css } from "styled-components";
import Button from "@/components/Button";

export default function TabBar({ onTabBar, activeTab }) {
  return (
    <StyledTabBar tabState={activeTab}>
      <Button
        variant="tabBarButton"
        type="button"
        isActive={activeTab === "uploads"}
        onClick={() => {
          onTabBar("uploads");
        }}
      >
        <SVGIcon variant="pictures" width={20} color="rgb(255,255,255)" />
        my pictures
      </Button>

      <Button
        variant="tabBarButton"
        type="button"
        isActive={activeTab === "likes"}
        onClick={() => {
          onTabBar("likes");
        }}
      >
        <SVGIcon variant="like" width={17} color="rgb(250,250,250)" />
        liked pictures
      </Button>
      <div></div>
    </StyledTabBar>
  );
}

const StyledTabBar = styled.div`
  background-color: var(--white);
  margin-bottom: 20px;
  width: 90%;
  height: 38px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 80px;
  display: flex;
  justify-content: space-around;

  div {
    transition: 0.5s ease;
    background-color: var(--black);
    width: 50%;
    position: absolute;
    height: 38px;
    border-radius: 80px;

    display: flex;

    ${({ tabState }) => {
      if (tabState === "uploads") {
        return css`
          left: 0;
        `;
      }
      if (tabState === "likes") {
        return css`
          left: 50%;
        `;
      }
    }}
  }
`;
