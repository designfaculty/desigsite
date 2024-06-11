import Link from "next/link";
import Image from "next/image";

const Footer = () => {
    return ( 
        <div className='py-24 px-4 md:px-8 lg:px-16 xl:32 3xl:px-64 bg-gray-100 text-sm mt-24'>
           {/*TOP*/}
           <div className='flex flex-col md:flex-row justify-between gap-24'>
            {/* Left*/}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col items-center justify-center gap-8'>
               <Link href="/">
                  <div className='flex flex-col gap-6'>
                  <div className='text-2xl tracking-wide'>small street SHOP</div>
                  <p>248 Rivonia Avenue. Rivonia. 2092 Johannesburg</p>
                  <span className='font-semibold'>smallstreet@smallstreet.shop</span>
                  <span className='font-semibold'>+27 726203386</span>
                  <div className='flex gap-6'>
                     <Image src="/facebook.png" alt="" width={16} height={16}/>
                     <Image src="/instagram.png" alt="" width={16} height={16}/>
                     <Image src="/youtube.png" alt="" width={16} height={16}/>
                     <Image src="/pinterest.png" alt="" width={16} height={16}/>
                     <Image src="/x.png" alt="" width={16} height={16}/>
                  </div>
                  </div>
               </Link>
            </div>
            {/* Center*/}
            <div className='hidden lg:flex justify-between w-1/2'>
               <div className='flex flex-col gap-6'>
               <h1 className='font-medium text-lg'>COMPANY</h1>
               <div className='flex flex-col justify-between gap-4'>
                  <Link href="/">About Us</Link>
                  <Link href="/">Careers</Link>
                  <Link href="/">Affiliates</Link>
                  <Link href="/">Blog</Link>
                  <Link href="/">Contact Us</Link>
               </div>
               </div>
               <div className='flex flex-col gap-6'>
               <h1 className='font-medium text-lg'>SHOP</h1>
               <div className='flex flex-col justify-between gap-4'>
                  <Link href="/">New Arrivals</Link>
                  <Link href="/">Accessories</Link>
                  <Link href="/">Men</Link>
                  <Link href="/">Women</Link>
                  <Link href="/">All Products</Link>
               </div>
               </div>
               <div className='flex flex-col gap-6'>
               <h1 className='font-medium text-lg'>HELP</h1>
               <div className='flex flex-col justify-between gap-4'>
                  <Link href="/">Customer Service</Link>
                  <Link href="/">My Account</Link>
                  <Link href="/">Find a Store</Link>
                  <Link href="/">Legal & Privacy</Link>
                  <Link href="/">Gift Card</Link>
               </div>
               </div>
            </div>
            {/* Right*/}
            <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
               <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
               <p>Be the first to get the latest news about trends, promotions, amd much more!</p>
               
               <div>
               <input type="text" placeholder="Email Address" className='p-4 w-3/4'/>
               <button className=' p-4 w-1/4 bg-jozi_chick text-white cursor-pointer'>JOIN</button>
                  </div>
               <span className='font-semibold '>Secure Payments</span>
               <div className='flex justify-between'>
                  <Image src="/discover.png" alt="" width={40} height={20}/>
                  <Image src="/skrill.png" alt="" width={40} height={20}/>
                  <Image src="/paypal.png" alt="" width={40} height={20}/>
                  <Image src="/mastercard.png" alt="" width={40} height={20}/>
                  <Image src="/visa.png" alt="" width={40} height={20}/>
               </div>
            </div>

           </div>

            {/*BOTTOM*/}
           <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-16'>
            <div className=''>@ 2024 small street shop</div>
            <div className='flex flex-row gap-6 font-semibold'>
               <div className=''> Proudly South African </div>
                <span className='flex flex-row gap-4'> <Image src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8e/Proudly_South_African_logo.svg/640px-Proudly_South_African_logo.svg.png" alt="" height={40} width={40}/> Language | English</span>

            </div>

           </div>

        </div>
     );
}
 
export default Footer;