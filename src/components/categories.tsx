import React, { useState } from 'react'
import InformationTechnology from './categories/InformaationTechnology';
import AllCategories from './categories/All';
import DesignCategory from './categories/design';
import BusinessCategory from './categories/Business';

const CategorySection = () => {
    const [currentTab,setCurrentTab] = useState(0);

    
  return (
    <section className='py-10 px-20 h-auto'>
        <h1 className="text-2xl">Course Categories</h1>
        <section className='flex items-center justify-end gap-8 my-4'>
            <div className={`${currentTab === 0 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(0)}>
                <h2>All</h2>
            </div>
            <div className={`${currentTab === 1 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(1)}>
                <h2>Technology</h2>
            </div>
            <div className={`${currentTab === 2 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(2)}>
                <h2>Design Courses</h2>
            </div>
            <div className={`${currentTab === 3 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(3)}>
                <h2>Business</h2>
            </div>
        </section>
        {currentTab === 0 && <AllCategories />}
        {currentTab === 1 && <InformationTechnology />}
        {currentTab === 2 && <DesignCategory />}
        {currentTab === 3 && <BusinessCategory />}
    </section>
  )
}

export default CategorySection