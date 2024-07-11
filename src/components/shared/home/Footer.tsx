import Logo from "../common/logo/Logo";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const iconStyles = "text-4xl text-white"
  return (
    <section className="relative z-10 py-24 bg-dvblue flex justify-center md:px-14 px-2">
      <section className="">
        <section className="flex justify-center mb-8">
          <Logo />
        </section>
        <section className="flex justify-center gap-5 mb-8">
          <a target="_blank" rel="noopener noreferrer" href={"https://www.facebook.com/profile.php?id=61559549195573&mibextid=ZbWKwL"}>
            <FaFacebook className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/studconnect"}>
            <FaInstagram className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://discord.gg/uYpENhRUwB"}>
            <FaDiscord className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://x.com/studconnect_X"}>
            <FaTwitter className={iconStyles} />
          </a>
          <a target="_blank" rel="noopener noreferrer" href={"https://whatsapp.com/channel/0029VaQlBzt3WHTVF9zdYu2T"}>
            <FaWhatsapp className={iconStyles} />
          </a>
        </section>
        <p className="text-sm text-center text-[#5E676C]">
          © 2024 StudConnect. All rights reserved.
        </p>
      </section>
    </section>
  );
};

export default Footer;
