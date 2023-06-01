import Image from 'next/image'
import bedroomCategoryImage from '../../../public/images/categories/category-1.jpg'
import mattressesCategoryImage from '../../../public/images/categories/category-2.jpg'
import officeCategoryImage from '../../../public/images/categories/category-3.jpg'
import outdoorCategoryImage from '../../../public/images/categories/category-4.jpg'
import sofasCategoryImage from '../../../public/images/categories/category-5.jpg'
import livingCategoryImage from '../../../public/images/categories/category-6.jpg'

const CategoriesSection = () => {
  return (
    <div className='container py-16'>
      <h2 className='text-3xl font-medium text-gray-800 mb-6'>
        SHOP BY CATEGORY
      </h2>

      <div className='grid grid-cols-3 gap-3'>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={bedroomCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Bedroom
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={mattressesCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Mattresses
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={officeCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Office
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={outdoorCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Outdoor
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={sofasCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Lounges &amp; Sofas
          </a>
        </div>
        <div className='relative rounded-sm overflow-hidden group'>
          <Image
            width={400}
            height={300}
            src={livingCategoryImage.src}
            alt=''
            className='w-full'
          />
          <a
            href='Bedroom'
            className='absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-50 transition'
          >
            Living &amp; Dining
          </a>
        </div>
      </div>
    </div>
  )
}

export default CategoriesSection
