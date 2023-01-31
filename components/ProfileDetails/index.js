import SVGIcon from "@/components/SVGIcon";
import Image from "next/image";

export default function ProfileDetails({ counter }) {
  return (
    <section>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          }
          width={200}
          height={200}
          alt={"profile picture"}
        />
        <div>
          <p>{counter}</p>
          <SVGIcon variant="pictures" width="17" />
        </div>
      </div>
      <h1>Rainer Zufall</h1>
      <p>since 2019</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </section>
  );
}
