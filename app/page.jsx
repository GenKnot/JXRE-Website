import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-1/page'

export const metadata = {
  title: 'JXRE | Multifamily Investment Advisory | Ontario & Quebec',
  description: 'Strategic multifamily investment advisory in Toronto, Ontario and Quebec. Expert guidance on multi-unit property acquisitions, financing structures, and long-term hold strategies. 多户住宅投资顾问 | Conseiller en investissement multifamilial.',
  keywords: 'multifamily investment, multi-unit properties, Toronto real estate, Quebec real estate, Ontario investment properties, rental properties, income properties, 多户住宅, 投资物业, immobilier multifamilial, investissement immobilier',
  openGraph: {
    title: 'JXRE | Multifamily Investment Advisory',
    description: 'Strategic multifamily investment advisory focused on long-term value across Ontario and Quebec.',
    url: 'https://jxre.ca',
    siteName: 'JXRE',
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JXRE | Multifamily Investment Advisory',
    description: 'Strategic multifamily investment advisory focused on long-term value across Ontario and Quebec.',
  },
  alternates: {
    canonical: 'https://jxre.ca',
    languages: {
      'en': 'https://jxre.ca',
      'fr': 'https://jxre.ca',
      'zh': 'https://jxre.ca',
    },
  },
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
  )
}
