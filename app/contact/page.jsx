import dynamic from "next/dynamic";
import Contact from "@/components/contact";

export const metadata = {
  title: 'Contact JXRE | Multifamily Investment Inquiry | Toronto & Montreal',
  description: 'Get in touch with JXRE for multifamily investment opportunities in Toronto, Ontario and Quebec. Office locations in Markham and Montreal. 联系我们咨询多户住宅投资 | Contactez-nous pour investissement multifamilial.',
  keywords: 'contact JXRE, multifamily inquiry, Toronto real estate contact, Montreal real estate, investment consultation, 联系我们, contactez-nous',
  openGraph: {
    title: 'Contact JXRE | Multifamily Investment Inquiry',
    description: 'Connect with our team for multifamily investment opportunities across Ontario and Quebec.',
    url: 'https://jxre.ca/contact',
    siteName: 'JXRE',
    locale: 'en_CA',
    type: 'website',
  },
  alternates: {
    canonical: 'https://jxre.ca/contact',
  },
};

const index = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
