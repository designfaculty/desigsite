const Filter = () => {
    return ( 
        <div className='mt-12 flex flex-wrap justify-between'>
            <div className='flex gap-6'>
                <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option value="">Type</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                 </select>
                 <input type="text" name="min" placeholder="min price" className='text-sm rounded pl-2 w-24 ring-1 ring-gray-400'/>
                 <input type="text" name="max" placeholder="max price" className='text-sm rounded pl-2 w-24 ring-1 ring-gray-400'/>
                 <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option value="">Size</option>
                    <option value="">Size</option>
                    
                 </select>
                 <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option value="">Color</option>
                    <option value="">Color</option>
                   
                 </select>
                 <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option value="">Category</option>
                    <option value="">Physical</option>
                    <option value="">Digital</option>
                 </select>
                 <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option value="">All Filters</option>
                    <option value="physical">Physical</option>
                    <option value="digital">Digital</option>
                 </select>
            </div>
            <div className=''>
            <select name="type" id="" className='py-2 rounded-2xl p-2 text-xs font-medium bg-[#EBEDED]'>
                    <option >Sort By</option>
                    <option value="physical">Price (low to high)</option>
                    <option value="digital">Price (high to low)</option>
                    <option value="">Newest</option>
                    <option value="">Oldest</option>
                 </select>

            </div>

        </div>
     );
}
 
export default Filter;