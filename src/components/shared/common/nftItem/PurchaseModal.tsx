import React from 'react';

interface PurchaseModalProps {
    nft: any;
    onClose: () => void;
    onPurchase: () => void;
}

const PurchaseModal: React.FC<PurchaseModalProps> = ({ nft, onClose, onPurchase }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
            <div className="bg-white p-8 rounded-lg w-11/12 md:w-1/2">
                <h2 className="text-2xl font-bold mb-4">Purchase NFT</h2>
                <p className="mb-4">Are you sure you want to purchase this NFT?</p>
                <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={onClose}>Cancel</button>
                <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={onPurchase}>Purchase</button>
            </div>
        </div>
    );
};

export default PurchaseModal;
