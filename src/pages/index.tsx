import { HomeContainer, Product } from '@/styles/pages/Home'
import Image from 'next/image'

import shirt1 from '../assets/Shirt/1.png'
import shirt2 from '../assets/Shirt/2.png'
// import shirt3 from '../assets/Shirt/3.png'
// import shirt4 from '../assets/Shirt/4.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} alt="" width={520} height={520} />

        <footer>
          <strong>Camisetas</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
      <Product>
        <Image src={shirt2} alt="" width={520} height={520} />

        <footer>
          <strong>Camisetas</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
