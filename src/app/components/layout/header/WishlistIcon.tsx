import Link from 'next/link'

import { TfiHeart } from 'react-icons/tfi'

const WishlistIcon = () => {
  return (
    <Link
      href='/wish-list'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <TfiHeart />
      </div>
      <div className='text-xs leading-3'>Wish List</div>
      <span className='absolute right-0 -top-3 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs'>
        {/* {wishlist} */}
      </span>
    </Link>
  )
}

export default WishlistIcon
