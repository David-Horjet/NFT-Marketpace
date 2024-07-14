import React from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { NftProps } from '../../../../types/Interface';

const NftItem: React.FC<NftProps> = ({ nft, onPurchaseClick }) => {
    return (
        <section className='shadow-xl rounded-3xl bg-gray p-5 relative group'>
            <section className='relative'>
                <section className='z-10 absolute left-3 top-3 bg-[#14141F] text-white flex items-center gap-1 px-3 py-2 text-sm rounded-xl'>
                    <FaRegHeart /> <span>34</span>
                </section>
                {/* <section className=' text-white text-center text-sm absolute inset-x-0 bottom-2 left-10 right-10 font-bold tracking-wider bg-gray px-2 py-2 rounded-xl items-center gap-2'>
                    Purchase
                </section> */}
                <section className='absolute inset-0 bg-black opacity-20 rounded-xl'></section>
                <img className='h-[250px] w-full object-cover rounded-xl' src={nft.displayImage} alt={nft.displayImage} />
                <button
                    onClick={onPurchaseClick}
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                >
                    <span className="bg-bc text-center text-white px-4 py-2 rounded-lg">Purchase</span>
                </button>
            </section>
            <section className='px-0 pt-3 text-sm text-para'>
                <section className="flex items-center justify-between mb-3">
                    <h3 className='text-white font-semibold text-base'>"Living Vase Gden shelby....</h3>
                    <span className='text-white bg-bc rounded-md px-2 font-semibold py-1'>BSC</span>
                </section>
                <section className="flex justify-between">
                    <section className="flex gap-2 items-center">
                        <section className="w-[45px] h-[45px] rounded-3xl">
                            <img className="w-full rounded-lg" src={nft.author.profilePic} alt="" />
                        </section>
                        <section className="flex flex-col text-left">
                            <span className='text-neutral-400'>Creator</span>
                            <span className='text-white font-bold text-base'>{nft.author.firstName}</span>
                        </section>
                    </section>
                    <section className="flex flex-col gap-2">
                        <span className='text-neutral-400 text-right'>Creator</span>
                        <span className='text-white text-right font-bold text-base'>37.97ETH</span>
                    </section>
                </section>
            </section>
        </section>
    );
};

export default NftItem;
