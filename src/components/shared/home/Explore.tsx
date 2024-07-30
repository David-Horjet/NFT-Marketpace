import { useEffect, useState } from 'react';
import { ButtonBg } from '../buttons/Buttons';
import PurchaseModal from '../common/nftItem/PurchaseModal';
import { NftProps } from '../../../types/Interface';
import { useConnection } from "@solana/wallet-adapter-react";
import { program, counterPDA, MarketplaceData } from "../../../anchor/setup";

const Explore = () => {
    const { connection } = useConnection();
    const [nfts, setNfts] = useState<MarketplaceData | null>(null);
    const [selectedNft, setSelectedNft] = useState<NftProps | null>(null);
    const [showModal, setShowModal] = useState(false);

    console.log(nfts);
    

    useEffect(() => {
        if (!connection) {
            console.error('Connection is not ready');
            return;
        }

        // Fetch initial account data
        program.account.marketplace.fetch(counterPDA).then((data: MarketplaceData) => {
            setNfts(data);
        });

        // Subscribe to account change
        const subscriptionId = connection.onAccountChange(
            // The address of the account we want to watch
            counterPDA,
            // callback for when the account changes
            accountInfo => {
                const updatedData = program.coder.accounts.decode<MarketplaceData>("marketplace", accountInfo.data);
                setNfts(updatedData);
            },
        );

        return () => {
            // Unsubscribe from account change
            connection.removeAccountChangeListener(subscriptionId);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [connection]);

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
                <span className="uppercase text-bc text-sm md:text-base font-medium">
                    EXPLORE MORE
                </span>
            </section>
            {/* <section className="w-100 py-10">
                {
                    nfts ? (
                        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {nfts.map((nft) => (
                                <NftItem
                                    key={nft.mint.toString()}
                                    nft={nft}
                                    id={nft.mint.toString()}
                                    pubkey={nft.mint.toString()}
                                    metadataAddress={nft.mint.toString()}
                                    onPurchaseClick={() => handlePurchaseClick(nft)}
                                />
                            ))}
                        </section>
                    ) : (
                        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"></section>
                    )
                }
            </section> */}
            <section className="w-full flex justify-center">
                <section className="w-fit">
                    <ButtonBg className='bg-bc px-10 py-4' onClick={undefined}>
                        Explore More
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
