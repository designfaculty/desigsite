import Link from "next/link";
import Image from "next/image";

const CategoryList = () => {
    return ( 
        <div className='px-4 overflow-x-scroll'>
            <div className='flex gap-4 md-gap-8 scrollbar-hide'>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/24415102/pexels-photo-24415102/free-photo-of-a-woman-in-white-is-looking-at-hats-on-a-shelf.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/20508967/pexels-photo-20508967/free-photo-of-man-in-jacket-and-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/16466074/pexels-photo-16466074/free-photo-of-person-in-eyeglasses-and-white-suit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/19818446/pexels-photo-19818446/free-photo-of-elegant-man-and-woman-posing-on-a-sofa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/20868299/pexels-photo-20868299/free-photo-of-a-woman-sitting-on-a-bench-with-surfboards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
               
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/24740582/pexels-photo-24740582/free-photo-of-smiling-couple-walking-on-road.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/24712933/pexels-photo-24712933/free-photo-of-model-sitting-in-suit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
                <Link href="/list?cat=test" className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6'>
                    <div className='relative bg-slate-100 w-full h-96'>
                        <Image src="https://images.pexels.com/photos/24703298/pexels-photo-24703298/free-photo-of-child-in-sportswear-holding-blue-balloon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" fill sizes="20vw" className='object-cover'/>
                    </div>
                    <h1 className='mt-8 font-light text-cl tracking-wide'>Category Name</h1>
                </Link>
            </div>

        </div>
     );
}
 
export default CategoryList;