"use client"
import Image from "next/image";

const CartModal = () => {

    const cartItems = true;

    return (
        <div className='absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20 w-max'>
            {!cartItems ? (

                <div className="text-jozi_chick">Cart is Empty duuh</div>
            ) : (
                <>
                    <h2 className="text-black text-xl">Shopping Cart</h2>
                    <div className='flex flex-col gap-8'>
                        {/**ITEM */}
                        <div className="text-black flex gap-4">
                            <Image src="https://images.pexels.com/photos/24821324/pexels-photo-24821324/free-photo-of-red.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className='object-cover rounded-md' />

                            <div className='flex flex-col justify-between w-full'>
                                {/*TOP*/}
                                {/*Title*/}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-1 bg-gray-50 rounded-sm">R20</div>
                                </div>

                                {/*Description*/}
                                <div className='text-sm text-gray-500'> Available </div>

                                {/*BOTTOM*/}

                                <div className="flex justify-between text-sm">
                                    <span className='text-gray-500'> Qty. 2</span>
                                    <span className='text-blue-500'> Remove</span>
                                </div>

                            </div>
                        </div>
                        {/**ITEM */}
                        <div className="text-black flex gap-4">
                            <Image src="https://images.pexels.com/photos/24821324/pexels-photo-24821324/free-photo-of-red.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width={72} height={96} className='object-cover rounded-md' />

                            <div className='flex flex-col justify-between w-full'>
                                {/*TOP*/}
                                {/*Title*/}
                                <div className='flex items-center justify-between gap-8'>
                                    <h3 className="font-semibold">Product Name</h3>
                                    <div className="p-1 bg-gray-50 rounded-sm">R20</div>
                                </div>

                                {/*Description*/}
                                <div className='text-sm text-gray-500'> Available </div>

                                {/*BOTTOM*/}

                                <div className="flex justify-between text-sm">
                                    <span className='text-gray-500'> Qty. 2</span>
                                    <span className='text-blue-500'> Remove</span>
                                </div>
                            </div>
                        </div>
                    </div>
                        //BOTTOM
                        <div className=''>
                            <div className='flex items-center justify-between font-semibold text-black'>
                                <span>Subtotal</span>
                                <span>R40</span>
                            </div>
                            <p className='text-gray-500 text-sm mt-2 mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis commodi</p>
                            <div className='flex justify-between text-sm text-black'>
                                <button className='rounded-md py-3 px-4 ring-1 ring-gray-300'>View Cart</button>
                                <button className='rounded-md py-3 px-4 ring-1 bg-black text-white'>Check Out</button>
                            </div>
                        </div></>
            )}
        </div>

    );
}

export default CartModal;
