import Link from 'next/link'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import bedIcon from '../../../../public/images/icons/bed.svg'
import sofaIcon from '../../../../public/images/icons/sofa.svg'
import officeIcon from '../../../../public/images/icons/office.svg'
import outdoorIcon from '../../../../public/images/icons/terrace.svg'
import mattressIcon from '../../../../public/images/icons/bed-2.svg'
import diningIcon from '../../../../public/images/icons/restaurant.svg'

const Navbar = () => {
  return (
    <nav className='bg-gray-800'>
      <div className='container flex'>
        <div className='px-8 py-4 bg-primary text-white flex items-center cursor-pointer relative group'>
          <span className='text-white'>
            <FaBars />
          </span>
          <span className='text-white ml-2'>All Categories</span>
          <div className='absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 duration-300 invisible group-hover:visible'>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={bedIcon.src}
                alt='Bedroom'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Bedroom</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={sofaIcon.src}
                alt='Sofa'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Sofa</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={officeIcon.src}
                alt='Office'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Office</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={outdoorIcon.src}
                alt='Outdoor'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Outdoor</span>
            </a>
            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={mattressIcon.src}
                alt='Mattress'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Mattress</span>
            </a>

            <a
              href='#'
              className='flex items-center px-6 py-3 hover:bg-gray-100 transition'
            >
              <Image
                src={diningIcon.src}
                alt='Dining'
                width={20}
                height={20}
                className='w-5 h-5 object-contain'
              />
              <span className='ml-6 text-gray-600 text-sm'>Dining</span>
            </a>
          </div>
        </div>

        <div className='flex items-center justify-between flex-grow pl-12'>
          <div className='flex items-center space-x-2'>
            <Link
              href='/'
              // className={({ isActive }) =>
              //   `py-4 px-4 text-gray-200 hover:text-white transition  ${
              //     isActive && 'bg-gray-700 '
              //   }`
              // }
            >
              Home
            </Link>
            <Link
              href='/shop/'
              // className={({ isActive }) =>
              //   `py-4 px-4 text-gray-200 hover:text-white transition  ${
              //     isActive && 'bg-gray-700 '
              //   }`
              // }
            >
              Shop
            </Link>
            <Link
              href='/about'
              // className={({ isActive }) =>
              //   `py-4 px-4 text-gray-200 hover:text-white transition  ${
              //     isActive && 'bg-gray-700 '
              //   }`
              // }
            >
              About Us
            </Link>
            <Link
              href='/contact'
              // className={({ isActive }) =>
              //   `py-4 px-4 text-gray-200 hover:text-white transition  ${
              //     isActive && 'bg-gray-700 '
              //   }`
              // }
            >
              Contact Us
            </Link>
          </div>
          {/* {user ? (
            <a
              href=''
              className='py-4 px-4 text-gray-200 hover:text-white transition'
              onClick={handleLogout}
            >
              Logout
            </a>
          ) : (
            <Link
              href='/login'
              className='py-4 px-4 text-gray-200 hover:text-white transition'
            >
              Login / Register
            </Link>
          )} */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
