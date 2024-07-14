import Logo from "../common/logo/Logo";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const iconStyles = "text-4xl text-white"
  return (
    <section className="relative z-10 py-24 bg-bc2 flex justify-center md:px-14 px-2">
      <section className="">
        <section className="flex justify-center mb-8">
          <Logo />
        </section>
        <section className="flex justify-center gap-5 mb-8">
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ASCorreia/anchor-marketplace"}>
            <FaFacebook className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ASCorreia/anchor-marketplace"}>
            <FaInstagram className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ASCorreia/anchor-marketplace"}>
            <FaDiscord className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ASCorreia/anchor-marketplace"}>
            <FaTwitter className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://github.com/ASCorreia/anchor-marketplace"}>
            <FaWhatsapp className={iconStyles} />
          </a>
        </section>
        <p className="text-sm text-center text-[#5E676C]">
          © 2024 Anchor Marketplace. All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
