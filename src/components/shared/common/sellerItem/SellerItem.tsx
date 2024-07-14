import React from 'react'
import { SellerProps } from '../../../../types/Interface'

const SellerItem: React.FC<SellerProps> = ({ seller }) => {
    return (
        <section className='p-5'>
            <section className="flex flex-col gap-2 items-center">
                <section className="w-[120px] h-[120px] rounded-3xl mb-2">
                    <img className="w-full rounded-xl" src={seller.profilePic} alt="" />
                </section>
                <section className="flex flex-col text-center ">
                    <span className='text-white font-bold text-sm md:text-base'>{seller.fullName}</span>
                    <span className='text-neutral-400 font-semibold text-sm md:text-base'>{seller.amount}</span>
                </section>
            </section>
        </section>
    )
}

export default SellerItem