import Product from '../components/product/Product'
import ShopSidebar from '../components/filters/ShopSidebar'
import Breadcrumb from '../components/Breadcrumb'
import { TiThLarge, TiThList } from 'react-icons/ti'

const ShopPage = () => {
  const handleSorting = (e: Event) => {
    // const sort = e.target.value
    // if (sort === '') {
    //   searchParams.delete('sort')
    // } else {
    //   searchParams.set('sort', sort)
    // }
    // setSearchParams(searchParams, { replace: true })
  }

  // pagination
  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber)
  // }

  return (
    <>
      <Breadcrumb path={'shop'} title={'Shop'} />
      <div className='container grid grid-cols-4 gap-6 pt-4 pb-14 items-start'>
        <ShopSidebar />
        <div className='col-span-3'>
          <div className='flex items-center mb-4'>
            <select
              className='w-44 text-sm text-gray-600 px-4 py-3 border border-gray-300 shadow-sm rounded focus:outline-none focus:border-primary'
              defaultValue=''
              // onChange={handleSorting}
            >
              <option value=''>Default sorting</option>
              <option value='priceAsc'>Price low-high</option>
              <option value='priceDes'>Price high-low</option>
            </select>

            <div className='flex gap-2 ml-auto'>
              <div className='border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer'>
                <TiThLarge />
              </div>
              <div className='border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer'>
                <TiThList />
              </div>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-6'>
            {/* {currentProducts.map((product) => (
              <Product key={product.id} item={product} />
            ))} */}
          </div>
          {/* <Paginate
            productsPerPage={productsPerPage}
            totalProducts={totalProducts}
            paginate={paginate}
          /> */}
        </div>
      </div>
    </>
  )
}

export default ShopPage
