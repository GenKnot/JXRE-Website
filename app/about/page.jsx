import dynamic from "next/dynamic";
import About from "@/components/about";

export const metadata = {
    title: 'About JXRE | Multifamily Investment Expert | Toronto & Quebec',
    description: 'Over a decade of experience in multifamily acquisitions, financing structures, and long-term hold strategies across Ontario and Quebec. 专注多户住宅投资与资产管理 | Expert en investissement multifamilial.',
    keywords: 'multifamily expert, real estate advisor, Toronto investment, Quebec investment, rental property management, 多户住宅专家, conseiller immobilier',
    openGraph: {
        title: 'About JXRE | Multifamily Investment Expert',
        description: 'Strategic multifamily investment advisory with hands-on experience in Ontario and Quebec markets.',
        url: 'https://jxre.ca/about',
        siteName: 'JXRE',
        locale: 'en_CA',
        type: 'profile',
    },
    alternates: {
        canonical: 'https://jxre.ca/about',
    },
};

const index = () => {
    return (
        <>
            <About />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
