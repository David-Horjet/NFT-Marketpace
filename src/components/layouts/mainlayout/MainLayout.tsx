import { useLocation, useOutlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import React from "react";
import { NavbarProps } from "../../../types/Interface";

const MainLayout: React.FC<NavbarProps> = ({ walletAddress, connectWallet }) => {
  const outlet = useOutlet();
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);

  return (
    <>
      <section className="overflow-x-hidden p-0 w-full flex">
        <section className="w-full flex">
          <Navbar walletAddress={walletAddress} connectWallet={connectWallet} />
          {outlet}
        </section>
      </section>
    </>
  );
};

export default MainLayout;
