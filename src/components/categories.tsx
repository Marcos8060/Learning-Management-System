import React, { useState } from 'react'
import InformationTechnology from './categories/InformaationTechnology';
import SocialSciences from './categories/SocialSciences';
import Business from './categories/Business';

const CategorySection = () => {
    const [currentTab,setCurrentTab] = useState(0);

    
  return (
    <section className='py-10 px-20 h-screen bg-primary'>
        <h1 className="text-2xl font-bold">Course Categories</h1>
        <section className='flex items-center gap-8 my-4'>
            <div className={`${currentTab === 0 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(0)}>
                <h2>Information Technology</h2>
            </div>
            <div className={`${currentTab === 1 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(1)}>
                <h2>Social Sciences</h2>
            </div>
            <div className={`${currentTab === 2 && 'border-b-4 py-2 border-secondary'} cursor-pointer`} onClick={()=> setCurrentTab(2)}>
                <h2>Business</h2>
            </div>
        </section>
        {currentTab === 0 && <InformationTechnology />}
        {currentTab === 1 && <SocialSciences />}
        {currentTab === 2 && <Business />}
    </section>
  )
}

export default CategorySection