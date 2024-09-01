import { YourLocation } from "./_components/location.js";
import type { NextPage } from "next";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Location",
  description: "Tell your location to be rescue",
});

const Location: NextPage = () => {
  return (
    <>
      <YourLocation />
      
    </>
  );
};

export default Location;
