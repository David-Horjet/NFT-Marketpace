import React from 'react'
import { ButtonBg } from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import NftColl from '../common/nftColl/NftColl';
import { nfts } from '../../../utils/DummyData';

const Collection: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id='collection' className='bg-bc2 md:px-10 px-4 py-20'>
            <section className="w-full flex items-center justify-between">
                <span className="capitalize text-white text-2xl md:text-4xl">
                    Popular Collection
                </span>
                <span
                    className="uppercase text-bc text-sm md:text-base font-medium"
                >EXPLORE MORE
                </span>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {nfts.map((nft, i) => (
                        <NftColl key={i} nft={nft} id={''} onPurchaseClick={function (): void {
                            throw new Error('Function not implemented.');
                        }} pubkey={''} metadataAddress={''} />
                    ))}
                </section>
            </section>
            <section className="w-full flex justify-center">
                <section className="w-fit">
                    <ButtonBg
                        onClick={() => navigate("/register")} className=' bg-bc px-10 py-4'>Explore More
                    </ButtonBg>
                </section>
            </section>
        </section>
    )
}

export default Collection