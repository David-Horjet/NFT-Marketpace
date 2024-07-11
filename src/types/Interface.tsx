export interface ButtonProps {
  children: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  bgColor?: string;
}

export interface InputProps {
  label: string;
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

export interface ListingProps {
  propList: {
    displayImage: string,
    listingType: string,
    amount: string,
    rentalPeriod: string,
    propertyName: string,
    location: string,
    bedrooms: number,
    bathrooms: number,
    sqFt: number,
    garage: number,
    agentInCharge: {
      title: string,
      firstName: string,
      profilePic: string
    },
    postedDate: string
  };
}
