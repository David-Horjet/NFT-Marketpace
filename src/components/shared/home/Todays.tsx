import React from 'react'
import { ButtonOutlineWhite } from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import NftItem from '../common/nftItem/NftItem';
import { TbCategory2 } from 'react-icons/tb';
import { IoPricetags } from 'react-icons/io5';
import { MdElectricBolt } from 'react-icons/md';
import { SiHiveBlockchain } from 'react-icons/si';
import { nfts } from '../../../utils/DummyData';

const Todays: React.FC = () => {
    const navigate = useNavigate();
    return (
        <section id='explore' className='bg-bc2 md:px-10 px-4 py-20'>
            <section className="w-full flex justify-between mb-10 items-center">
                <span className="capitalize text-white text-2xl md:text-4xl font-medium">
                    Today's Picks
                </span>
                <span
                    className="uppercase text-bc text-sm md:text-base font-medium"
                >EXPLORE MORE
                </span>
            </section>
            <section className="w-full hidden md:flex justify-start gap-4">
                <section className="w-fit">
                    <ButtonOutlineWhite
                        onClick={() => navigate("/register")} className='px-5 py-2 flex items-center gap-1'><TbCategory2 className='text-white' />Category
                    </ButtonOutlineWhite>
                </section>
                <section className="w-fit">
                    <ButtonOutlineWhite
                        onClick={() => navigate("/register")} className='px-5 py-2 flex items-center gap-1'><IoPricetags
                            className='text-white' />Price Range
                    </ButtonOutlineWhite>
                </section>
                <section className="w-fit">
                    <ButtonOutlineWhite
                        onClick={() => navigate("/register")} className='px-5 py-2 flex items-center gap-1'><MdElectricBolt className='text-white' />Sale Type
                    </ButtonOutlineWhite>
                </section>
                <section className="w-fit">
                    <ButtonOutlineWhite
                        onClick={() => navigate("/register")} className='px-5 py-2 flex items-center gap-1'><SiHiveBlockchain className='text-white' />Blockchain
                    </ButtonOutlineWhite>
                </section>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {nfts.map((nft) => (
                        <NftItem
                            key={nft.id}
                            nft={nft}
                            id={"1"} pubkey={''} metadataAddress={''} onPurchaseClick={function (): void {
                                throw new Error('Function not implemented.');
                            }} />
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Todays