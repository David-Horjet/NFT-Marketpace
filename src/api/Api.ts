// api.ts
import axios from 'axios';
import { NftProps } from '../types/Interface';

export const fetchNFTs = async (): Promise<NftProps[]> => {
    try {
        const response = await axios.get('/api/nfts');
        return response.data;
    } catch (error) {
        console.error('Error fetching NFTs:', error);
        throw error;
    }
};
