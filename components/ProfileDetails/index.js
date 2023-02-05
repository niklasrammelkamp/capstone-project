import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";

export default function ProfileDetails({ user }) {
  return (
    <section>
      <div>
        <Image
          src={user.image}
          width={200}
          height={200}
          alt={`profile picture of ${user.name}`}
        />
        <div>
          <p>{user.uploadedPosts.length}</p>
          <SVGIcon variant="pictures" width="17" />
        </div>
      </div>
      <h1>{user.name}</h1>
      <p>since {user.regestrationYear}</p>
      <p>{user.bio}</p>
    </section>
  );
}
