import Image from 'next/image'

import deliveryVanIcon from '../../../public/images/icons/delivery-van.svg'
import moneyBackIcon from '../../../public/images/icons/money-back.svg'
import serviceHoursIcon from '../../../public/images/icons/service-hours.svg'

function FeatureSection() {
  return (
    <div className='container py-16'>
      <div className='w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center'>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <Image
            width={48}
            height={48}
            src={deliveryVanIcon.src}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className=' text-lg cursor-default'>Free Shopping</h4>
            <p className='text-gray-500 text-sm cursor-default'>
              Order over $200
            </p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <Image
            width={48}
            height={48}
            src={moneyBackIcon.src}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className='text-lg cursor-default'>Money Returns</h4>
            <p className='text-gray-500 text-sm cursor-default'>
              30 Days money return
            </p>
          </div>
        </div>
        <div className='border border-primary rounded-sm px-3 py-6 flex justify-center items-center gap-5'>
          <Image
            width={48}
            height={48}
            src={serviceHoursIcon.src}
            alt=''
            className='w-12 h-12 object-contain'
          />
          <div>
            <h4 className=' text-lg cursor-default'>24/7 Support</h4>
            <p className='text-gray-500 text-sm cursor-default'>
              Customer support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureSection
