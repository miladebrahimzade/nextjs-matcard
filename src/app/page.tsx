import CategoriesSection from './components/CategoriesSection'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Modal from './components/Modal'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeatureSection />
      <CategoriesSection />
      {/* <ProductWrapper title='Top new arrival' /> */}
      {/* <ProductWrapper title='Latest products' /> */}
      {/* <Modal
      // modalPopup={modalPopup} onClose={() => onClose()}
      /> */}
    </>
  )
}

export default HomePage
