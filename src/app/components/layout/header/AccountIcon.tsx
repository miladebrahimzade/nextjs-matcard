import Link from 'next/link'
import { FiUser } from 'react-icons/fi'

const AccountIcon = () => {
  return (
    <Link
      href='/account'
      className='flex flex-col items-center justify-center space-y-1 text-gray-700 hover:text-primary transition relative'
    >
      <div className='text-2xl'>
        <FiUser />
      </div>
      <div className='text-xs leading-3'>Account</div>
    </Link>
  )
}

export default AccountIcon
