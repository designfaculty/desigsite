import CategoryList from "@/components/CategoryList"
import LatestList from "@/components/LatestList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"

const HomePage = () => {
  return (
    <div className=''>
      <Slider />
      <div className='m-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className="text-2xl">FEATURE PRODUCTS</h1>
        <ProductList />
      </div>
      <div className='mt-24'>
        <h1 className="text-2xl px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 mb-12">CATEGORIES</h1>
        <CategoryList />
      </div>
      <div className='m-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className="text-2xl">LATEST ARRIVALS</h1>
        <LatestList />
      </div>
    </div>
  )
}

export default HomePage