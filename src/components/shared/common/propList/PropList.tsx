import React from 'react'
import { ListingProps } from '../../../../types/Interface'
import { FaLocationDot } from 'react-icons/fa6'
import { MdOutlineBathroom, MdOutlineBedroomParent } from 'react-icons/md'
import { GiHomeGarage } from 'react-icons/gi'
import { AiFillBoxPlot } from 'react-icons/ai'
import { IoCalendarOutline } from 'react-icons/io5'

const PropList: React.FC<ListingProps> = ({ propList }) => {
    return (
        <section className='shadow-xl rounded-xl'>
            <section className='relative'>
                <section className='z-10 absolute left-3 top-3 bg-bc text-white px-3 py-2 text-sm rounded-xl'>
                    For {propList.listingType}
                </section>
                <section className='z-10 text-bc2 text-xl absolute bottom-3 right-3 font-bold tracking-wider'>
                    {propList.amount}<span className='text-white text-base'>/{propList.rentalPeriod}</span>
                </section>
                <section className='absolute inset-0 bg-black opacity-20 rounded-xl'></section>
                <img className='h-[250px] w-full object-cover rounded-t-xl' src={propList.displayImage} alt={propList.displayImage} />
            </section>
            <section className='p-5'>
                <h2 className='text-bc font-semibold text-xl mb-2'>{propList.propertyName}</h2>
                <p className='text-para w-full flex items-center gap-1 text-sm mb-4'><FaLocationDot /><span>{propList.location}</span></p>
                <section className='w-full grid grid-cols-2 text-para text-sm'>
                    <section className="flex items-center gap-2"><MdOutlineBedroomParent /><span>{propList.bedrooms} Bedroom(s)</span></section>
                    <section className="flex items-center gap-2"><MdOutlineBathroom /><span>{propList.bathrooms} Bathroom(s)</span></section>
                    <section className="flex items-center gap-2"><AiFillBoxPlot /><span>Sq Ft: {propList.sqFt}</span></section>
                    <section className="flex items-center gap-2"><GiHomeGarage /><span>{propList.garage} Garage(s)</span></section>
                </section>
            </section>
            <section className='border-t border-t-neutral-300 px-5 py-3 text-sm text-para'>
                <section className="flex justify-between">
                    <section className="flex gap-1 items-center">
                        <section className="w-[30px] h-[30px] rounded-full">
                            <img className="w-full rounded-full" src={propList.agentInCharge.profilePic} alt="" />
                        </section>
                        <span className=''>{propList.agentInCharge.title} {propList.agentInCharge.firstName}</span>
                    </section>
                    <section className="flex gap-2 items-center">
                        <IoCalendarOutline />
                        <span>{propList.postedDate}</span>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default PropList