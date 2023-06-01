import Link from 'next/link'
import Image from 'next/image'
import logo from '../../../../../public/images/logo.svg'
import Search from './Search'
import WishlistIcon from './WishlistIcon'
import CardIcon from './CardIcon'
import AccountIcon from './AccountIcon'

function Header() {
  return (
    <header className='py-4 shadow-sm bg-white'>
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          <Image
            className='w-32'
            width={128}
            height={128}
            src={logo.src}
            alt='matcart-logo'
          />
        </Link>

        <Search />
        <div className='flex items-center space-x-4'>
          <WishlistIcon />
          <CardIcon />
          <AccountIcon />
        </div>
      </div>
    </header>
  )
}

export default Header
