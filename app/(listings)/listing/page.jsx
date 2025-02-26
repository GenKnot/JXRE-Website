import dynamic from "next/dynamic";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title: 'JXRE | Properties',
  description:
    'Discover high-value multi-plex properties in Montreal. Specializing in vintage walk-ups with proven rental income and investment potential. Expert guidance on income property investment in prime Montreal neighborhoods.',
}

const index = () => {
  return (
    <>
      <GridV6 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
