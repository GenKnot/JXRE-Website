import dynamic from "next/dynamic";
import NotFound from "@/components/404";

export const metadata = {
  title: 'JXRE | 404 Not Found',
  description:
      'Explore premium real estate listings in Montreal and Toronto. Specializing in high-value multi-plex properties with strong rental income potential. Get expert advice on investing in prime urban locations.',
};

const index = () => {
  return (
    <>
      <NotFound />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
