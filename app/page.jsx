import Wrapper from "@/components/layout/Wrapper";
import HomeMain from './(homes)/home-1/page'

export const metadata = {
  title: 'JXRE - Real Estate',
  description:
    'FindHouse - Real Estate React Template',
}

export default function Home() {
  return (
    <Wrapper>
      <HomeMain/>
    </Wrapper>
  )
}
