import Link from 'next/link'
import { TfiHome } from 'react-icons/tfi'
import { FiChevronRight } from 'react-icons/fi'

function Breadcrumb({ path, title }: { path: string; title: string }) {
  return (
    <div className='container py-4 flex items-center gap-2'>
      <Link href='/' className='text-primary text-base'>
        <TfiHome />
      </Link>
      <span className='text-base text-gray-500'>
        <FiChevronRight />
      </span>
      <Link href={`/${path}`} className='text-primary text-base'>
        <span className='text-gray-600 font-medium'>{title}</span>
      </Link>
    </div>
  )
}

export default Breadcrumb
