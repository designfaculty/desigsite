import Link from "next/link";
import Image from "next/image";

const ProductList = () => {
    return ( 
        <div className=' mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap'>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                <Image src="https://images.pexels.com/photos/24821324/pexels-photo-24821324/free-photo-of-red.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                <Image src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>R40</span>

                </div>
                <div className='text-sm text-gray-500'>
                    My clotheline Description and colors etc etc
                </div>
                <button className='rounded-1xl w-max ring-1 ring-jozi_chick py-2 px-4 text-xs hover:bg-jozi_chick hover:text-white'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                <Image src="https://images.pexels.com/photos/25176031/pexels-photo-25176031/free-photo-of-a-woman-in-jeans-leaning-against-a-wall.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                <Image src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>R40</span>

                </div>
                <div className='text-sm text-gray-500'>
                    My clotheline Description and colors etc etc
                </div>
                <button className='rounded-1xl w-max ring-1 ring-jozi_chick py-2 px-4 text-xs hover:bg-jozi_chick hover:text-white'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                <Image src="https://images.pexels.com/photos/25185005/pexels-photo-25185005/free-photo-of-fashion-eastern-dresses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                <Image src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>R40</span>

                </div>
                <div className='text-sm text-gray-500'>
                    My clotheline Description and colors etc etc
                </div>
                <button className='rounded-1xl w-max ring-1 ring-jozi_chick py-2 px-4 text-xs hover:bg-jozi_chick hover:text-white'>Add to Cart</button>
            </Link>
            <Link href="/test" className='w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]'>
                <div className='relative w-full h-80'>
                <Image src="https://images.pexels.com/photos/19826939/pexels-photo-19826939/free-photo-of-hand-holding-tray-with-bread-over-plant-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500'/>
                <Image src="https://images.pexels.com/photos/23644605/pexels-photo-23644605/free-photo-of-a-woman-standing-by-the-water-in-front-of-houses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="25vw" className='absolute object-cover rounded-md'/>
                </div>
                <div className='flex justify-between'>
                    <span className='font-medium'>Product Name</span>
                    <span className='font-semibold'>R40</span>

                </div>
                <div className='text-sm text-gray-500'>
                    My clotheline Description and colors etc etc
                </div>
                <button className='rounded-1xl w-max ring-1 ring-jozi_chick py-2 px-4 text-xs hover:bg-jozi_chick hover:text-white'>Add to Cart</button>
            </Link>

        </div>
     );
}
 
export default ProductList;