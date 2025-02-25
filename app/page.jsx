import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-1/page'

export const metadata = {
  title: 'JXRE | Income Property Specialists',
  description:
      'Discover high-value multi-plex properties. Specializing in vintage walk-ups with proven rental income and investment potential. Expert guidance on income property investment in prime Canada neighborhoods.',
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
  )
}
