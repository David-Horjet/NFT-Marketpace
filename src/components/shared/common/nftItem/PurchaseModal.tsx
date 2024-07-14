// src/components/common/nftItem/PurchaseModal.tsx

import React from 'react';

interface PurchaseModalProps {
    nft: any;
    onClose: () => void;
    onPurchase: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ nft, onClose, onPurchase }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-bc2 rounded-lg p-8 w-full max-w-2xl mx-4">
                <h2 className="text-2xl font-bold mb-4 text-center text-white">Purchase NFT</h2>
                <p className="mb-4">You're about to purchase {nft.propertyName}</p>
                <button onClick={onPurchase} className="bg-blue-500 text-white py-2 px-4 rounded mr-4">
                    Confirm Purchase
                </button>
                <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default PurchaseModal;
