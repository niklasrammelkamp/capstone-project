import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SVGIcon from "../SVGIcon";

export default function PostingDetails({ picture }) {
  const router = useRouter();

  return (
    <>
      <button onClick={() => router.back()}>back</button>
      <Image
        src={picture.image}
        width={200}
        height={200}
        alt={picture.description}
      />
      <p>{picture.date}</p>
      <p>{picture.description.substring(0, 100)} …</p>
      <ul>
        {picture.categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
      </ul>

      <h2>Settings</h2>
      <StyledSettings>
        <div>
          <SVGIcon variant="film" width="16" />
          <p>Film</p>
        </div>
        <p>{picture.settings.film}</p>

        <div>
          <SVGIcon variant="aperture" width="13" />
          <p>Aperture</p>
        </div>
        <p>{picture.settings.aperture}</p>

        <div>
          <SVGIcon variant="time" width="13" />
          <p>Time</p>
        </div>
        <p>{picture.settings.time}</p>

        <div>
          <SVGIcon variant="lens" width="13" />
          <p>Lens</p>
        </div>
        <p>{picture.settings.lens}</p>

        <div>
          <SVGIcon variant="camera" width="15" />
          <p>Camera</p>
        </div>
        <p>{picture.settings.camera}</p>
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
