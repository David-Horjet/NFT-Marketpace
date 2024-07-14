import { Key } from "react";

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

export interface AccordionItem {
  title: string;
  icon: React.ReactNode;
  content: string;
  isOpen?: boolean;
}

export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}

export interface NavbarProps {
  walletAddress: string,
  connectWallet: string
}

export interface NftProps {
  id: Key | null | undefined;
  onPurchaseClick: () => void;
  nft: {
    displayImage: string,
    author: {
      firstName: string,
      profilePic: string
    },
  };
}

export interface SellerProps {
  seller: {
      amount: string,
      fullName: string,
      profilePic: string
  };
}
