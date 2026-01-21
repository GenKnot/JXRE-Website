import dynamic from "next/dynamic";
import GridV6 from "@/components/listing-grid/grid-v6";

export const metadata = {
  title: 'Multifamily Properties for Sale | Ontario & Quebec | JXRE',
  description: 'Browse multifamily investment properties in Toronto, Ontario and Quebec. Multi-unit buildings, apartment complexes, and income properties with strong rental potential. 多户住宅出售 | Propriétés multifamiliales à vendre.',
  keywords: 'multifamily for sale, multi-unit properties, apartment buildings, income properties Toronto, Quebec investment properties, rental buildings, 多户住宅出售, immeubles à revenus',
  openGraph: {
    title: 'Multifamily Properties for Sale | JXRE',
    description: 'Discover multifamily investment opportunities across Ontario and Quebec.',
    url: 'https://jxre.ca/listing',
    siteName: 'JXRE',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jxre.ca/listing',
  },
};

const index = () => {
  return (
    <>
      <GridV6 />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
