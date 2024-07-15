
export interface ButtonProps {
  children: React.ReactNode;
  onClick: any;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
}

export interface InputProps {
  label?: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string
}

export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}

export interface NavbarProps {
  walletAddress: string,
  connectWallet: () => void;
}

// Update your NftProps type to include required properties
// Update your NftProps type to include required properties
export interface NftProps {
  id: string;
  nft: any; 
  onPurchaseClick: () => void;
  pubkey: string;
  metadataAddress: string;
}



export interface SellerProps {
  seller: {
      amount: string,
      fullName: string,
      profilePic: string
  };
}
