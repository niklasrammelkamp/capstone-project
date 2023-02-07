import styled from "styled-components";
import Image from "next/image";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";
import ButtonLike from "@/components/ButtonLike";

export default function PostingDetails({ post, loggedInUserID, reload }) {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <Image src={post.image} width={200} height={200} alt={post.description} />
      <p>{post.date}</p>
      <Image
        src={post.user.image}
        width={30}
        height={30}
        alt={`profile picture of ${post.user.name}`}
      />
      <p>{post.user.name}</p>
      <ButtonLike post={post} loggedInUserID={loggedInUserID} reload={reload} />

      <p>{post.description}</p>
      <ul>
        {post.categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>

      <h2>Settings</h2>
      <StyledSettings>
        <div>
          <SVGIcon variant="film" width="16" />
          <p>Film</p>
        </div>
        <p>{post.settings.film}</p>

        <div>
          <SVGIcon variant="aperture" width="13" />
          <p>Aperture</p>
        </div>
        <p>{post.settings.aperture}</p>

        <div>
          <SVGIcon variant="time" width="13" />
          <p>Time</p>
        </div>
        <p>{post.settings.time}</p>

        <div>
          <SVGIcon variant="lens" width="13" />
          <p>Lens</p>
        </div>
        <p>{post.settings.lens}</p>

        <div>
          <SVGIcon variant="camera" width="15" />
          <p>Camera</p>
        </div>
        <p>{post.settings.camera}</p>
      </StyledSettings>
    </>
  );
}

const StyledSettings = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0;

  *:nth-child(even) {
    text-align: right;
  }

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
