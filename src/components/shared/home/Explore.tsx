import React, { useState } from 'react';
import { ButtonBg } from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import NftItem from '../common/nftItem/NftItem';
import PurchaseModal from '../common/nftItem/PurchaseModal';
import { NftProps } from '../../../types/Interface';
import { nfts } from '../../../utils/DummyData';
// import { fetchNFTs } from '../../../api/Api';

const Explore: React.FC = () => {
    const navigate = useNavigate();
    // const [nfts, setNfts] = useState<NftProps[]>([]);
    const [selectedNft, setSelectedNft] = useState<NftProps | null>(null);
    const [showModal, setShowModal] = useState(false);

    console.log(nfts);


    // useEffect(() => {
    //     const loadNFTs = async () => {
    //         try {
    //             const fetchedNfts = await fetchNFTs();
    //             setNfts(fetchedNfts);
    //         } catch (error) {
    //             console.error("Failed to fetch NFTs", error);
    //         }
    //     };

    //     loadNFTs();
    // }, []);

    // const handlePurchaseClick = (nft: NftProps) => {
    //     setSelectedNft(nft);
    //     setShowModal(true);
    // };

    const handleModalClose = () => {
        setShowModal(false);
        setSelectedNft(null);
    };

    return (
        <section id='explore' className='bg-bc2 md:px-10 px-4 py-20'>
            <section className="w-full flex items-center justify-between">
                <span className="capitalize text-white text-2xl md:text-4xl font-medium">
                    Live Auctions
                </span>
                <span
                    className="uppercase text-bc text-sm md:text-base font-medium"
                >EXPLORE MORE
                </span>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {nfts.map((nft) => (
                        <NftItem
                            key={nft.id}
                            nft={nft}
                            id={"1"} pubkey={''} metadataAddress={''} onPurchaseClick={function (): void {
                                throw new Error('Function not implemented.');
                            } } />
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
            {showModal && selectedNft && (
                <PurchaseModal
                    nft={selectedNft}
                    onClose={handleModalClose}
                    onPurchase={handleModalClose} // Replace with actual purchase function
                />
            )}
        </section>
    );
}

export default Explore;
