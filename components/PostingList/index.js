import styled from "styled-components";
import PostingPreview from "../PostingPreview";

export default function PostingList({ posts, loggedInUserID, reload }) {
  return (
    <StyledPostingList>
      {posts.map((post) => {
        return (
          <PostingPreview
            post={post}
            key={post._id}
            loggedInUserID={loggedInUserID}
            reload={reload}
          />
        );
      })}
    </StyledPostingList>
  );
}

const StyledPostingList = styled.section`
  width: calc(100% + 60px);
  margin-left: -30px;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;
