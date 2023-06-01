import Link from 'next/link'
import heroBackground from '../../../public/images/banner-bg.jpg'

function Hero() {
  return (
    <div
      style={{ backgroundImage: `url(${heroBackground.src})` }}
      className='bg-cover bg-no-repeat bg-bottom py-36'
    >
      <div className='container'>
        <h1 className='text-6xl text-gray-800 font-medium mb-4'>
          Best Collection For <br />
          Home Decoration
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          <br />
          velit labore illo saepe iure obcaecati consectetur quidem nesciunt in!
          Unde?
        </p>
        <div className='mt-12'>
          <Link
            href='/shop'
            className='bg-primary text-white border border-primary px-8 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition'
          >
            shop now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
