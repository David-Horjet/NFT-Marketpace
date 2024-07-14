import React from 'react'
import { NftProps } from '../../../../types/Interface'
import { IoCalendarOutline } from 'react-icons/io5'
import { GrAnchor } from 'react-icons/gr'
import { FaRegHeart } from 'react-icons/fa'

const NftColl: React.FC<NftProps> = ({ nft }) => {
    return (
        <section className='shadow-xl rounded-3xl bg-gray p-5'>
            <section className="flex justify-between mb-4">
                <section className="flex gap-2 items-center">
                    <section className="w-[45px] h-[45px] rounded-3xl">
                        <img className="w-full rounded-lg" src={nft.agentInCharge.profilePic} alt="" />
                    </section>
                    <section className="flex flex-col text-left">
                        <span className='text-white text-lg font-bold'>Creative Art Colection</span>
                        <span className='text-neutral-400 font-semibold text-base'>created by {nft.agentInCharge.firstName}</span>
                    </section>
                </section>
                <section className="flex items-center gap-2">
                    <section className='bg-[#14141F] text-white flex items-center gap-1 px-3 py-2 text-sm rounded-xl'>
                        <FaRegHeart /> <span>34</span>
                    </section>
                </section>
            </section>
            <section className='flex w-ful h-[250px] items-center gap-2'>
                <section className='w-1/2 h-full'>
                    <img className='h-full w-full object-cover rounded-xl' src={nft.displayImage} alt={nft.displayImage} />
                </section>
                <section className='flex flex-col w-1/2 h-full gap-2'>
                    <section className='w-full h-1/3 flex gap-2'>
                        <img className=' w-1/2 object-cover rounded-xl' src={nft.displayImage} alt={nft.displayImage} />
                        <img className=' w-1/2 object-cover rounded-xl' src={nft.displayImage} alt={nft.displayImage} /></section>
                    <section className='w-full h-2/3'>
                        <img className='h-full w-full object-cover rounded-xl' src={nft.displayImage} alt={nft.displayImage} />
                    </section>
                </section>
            </section>
        </section>
    )
}

export default NftColl