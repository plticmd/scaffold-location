import { YourAltitude } from "./_components/altitude.js";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Altitude",
  description: "Your Altitude",
});

const Altitude: NextPage = () => {
  return (
    <>
      <YourAltitude />
      
    </>
  );
};

export default Altitude;
