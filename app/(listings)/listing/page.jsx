import dynamic from "next/dynamic";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title: 'JXRE | Properties',
  description:
      'Explore premium real estate listings in Montreal and Toronto. Specializing in high-value multi-plex properties with strong rental income potential. Get expert advice on investing in prime urban locations.',
};

const index = () => {
  return (
    <>
      <GridV6 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
