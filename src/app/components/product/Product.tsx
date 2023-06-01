import Link from 'next/link'
import Image from 'next/image'
import { TfiHeart, TfiSearch } from 'react-icons/tfi'
import { FaStar } from 'react-icons/fa'

interface Item {
  id: string
  name: string
  description: string
  image: string
  price: number
  discount: number
  star: number
  reviews: number
  category: string
  brand: string
  size: string
  color: string
}
function Product({ item }: { item: Item }) {
  return (
    <div className='bg-white shadow rounded overflow-hidden group'>
      <div className='relative'>
        <Image
          src={`/images/products/${item.image}.jpg`}
          alt=''
          className='w-full'
        />
        <div className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition'>
          <Link
            href='/product-detail'
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
          >
            <TfiSearch />
          </Link>
          <button
            // onClick={addToWishlist}
            className='text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition'
          >
            <TfiHeart />
          </button>
        </div>
      </div>

      <div className='pt-4 pb-3 px-4'>
        <Link href='/product-detail'>
          <h4 className='font-medium text-xl mb-2 text-gray-800 hover:text-primary transition'>
            {item.name}
          </h4>
        </Link>
        <div className='flex items-baseline mb-1 space-x-2 font-roboto'>
          {item.discount !== 0 ? (
            <>
              <p className='text-xl text-primary font-semibold'>
                ${item.discount.toFixed(2)}
              </p>
              <p className='text-sm text-gray-400 line-through'>
                ${item.price.toFixed(2)}
              </p>
            </>
          ) : (
            <p className='text-xl text-primary font-semibold'>
              ${item.price.toFixed(2)}
            </p>
          )}
        </div>
        <div className='flex items-center'>
          <div className='flex gap-1 text-sm text-yellow-400'>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
            <span>
              <FaStar />
            </span>
          </div>
          <div className='text-xs text-gray-500 ml-3'>{item.reviews}</div>
        </div>
      </div>
      <button
        // onClick={addToCardItem}
        className='block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition'
      >
        Add to cart
      </button>
    </div>
  )
}

export default Product
