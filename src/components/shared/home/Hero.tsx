// import { useNavigate } from 'react-router-dom';
// import { ButtonBg } from '../buttons/Buttons';
import { IoRocket } from "react-icons/io5"
import heroImg from "../../../assets/images/hero-guy.png"
import { ButtonOutline } from "../buttons/Buttons"
import { IoIosCreate } from "react-icons/io"

const Hero = () => {
  // const navigate = useNavigate()
  return (
    <section className="w-full bg-cover bg-no-repeat bg-center md:px-14 px-2 z-10 bg-bc2 relative">
      <section className="w-full md:flex h-[100vh] bg-image-container bg-fixed items-center pt-28 md:pt-0 md:justify-center">
        <section className="w-full md:w-1/2">
          <h1
            className="md:text-left text-center mb-5 text-white md:text-[45px] text-[32px] font-bold capitalize" >Discover, find, <br /><span className="text-clip">Sell extra ordinary</span> Monster NFTs</h1>
          <p
            className="md:text-left text-center mb-5 text-neutral-300 text-[16px] md:text-xl md:leading-9">Marketplace for monster character cllections non fungible token NFTs</p>
          <section className="flex gap-4 justify-center md:justify-start">
            <section className="fit">
              <ButtonOutline className="px-6 gap-2 py-3" onClick={function (): void {
                throw new Error("Function not implemented.")
              }}>
                <IoRocket />
                <span>Explore</span>
              </ButtonOutline>
            </section>
            <section className="fit">
              <ButtonOutline className="px-6 gap-2 py-3" onClick={function (): void {
                throw new Error("Function not implemented.")
              }}>
                <IoIosCreate />
                <span>Create</span>
              </ButtonOutline>
            </section>
          </section>
        </section>
        <section className="w-full md:w-1/2">
          <img src={heroImg} alt="" /></section>
      </section>
    </section>
  )
}

export default Hero