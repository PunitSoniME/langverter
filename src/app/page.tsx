import dynamic from "next/dynamic";

const HomeButton = dynamic(() => import("@/components/home"));

export default function Home() {
  return (
    <>
      <HomeButton />
    </>
  );
}
