import dynamic from "next/dynamic";
import Contact from "@/components/contact";

export const metadata = {
  title: 'JXRE | Contact',
  description:
      'Explore premium real estate listings in Montreal and Toronto. Specializing in high-value multifamily properties with strong rental income potential. Get expert advice on investing in prime urban locations.',
};

const index = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
