import Image from "next/image";

export default function PostingPreview({ picture }) {
  return (
    <article>
      <Image src={picture.image} width={200} height={200} alt={"p"} />
      <p>{picture.date}</p>
      <p>{picture.describtion.substring(0, 100)} …</p>
      <ul>
        {picture.catagories.map((catagory) => {
          return <li key={catagory}>{catagory}</li>;
        })}
      </ul>
    </article>
  );
}
