import Link from 'next/link'

import { AiOutlineShoppingCart } from 'react-icons/ai'

const CardIcon = () => {
  return (
    <Link
      href='/card'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <AiOutlineShoppingCart />
      </div>
      <div className='text-xs leading-3'>Card</div>
      <span className='absolute -right-2 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
        {/* {cardItem} */}
      </span>
    </Link>
  )
}

export default CardIcon
