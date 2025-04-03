import dynamic from "next/dynamic";
import HomeMain from "@/components/home";

export const metadata = {
  title: 'JXRE | Montreal Income Property Specialists',
  description:
      'Discover high-value multifamily properties in Montreal. Specializing in vintage walk-ups with proven rental income and investment potential. Expert guidance on income property investment in prime Montreal neighborhoods.',
}

const index = () => {
  return (
    <>
      <HomeMain />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
