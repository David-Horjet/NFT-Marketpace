
import { FaArrowRight } from "react-icons/fa"
import Add from "../../../assets/images/add-nft.png"
import CreateNft from "../../../assets/images/create-coll.png"
import Sell from "../../../assets/images/sell-nft.png"
import Set from "../../../assets/images/set-wallet.png"

const Create = () => {
  const featuresData = [
    {
      icon: Set,
      title: "Set Up Your Wallet",
      step: "01",
      content:
        "Wallet that is functional for NFT purchasing. You may have a Coinbase account at this point, but very few are actually set up to buy an NFT.",
    },
    {
      icon: CreateNft,
      title: "Create Your Collection",
      step: "02",
      content:
        "Setting up your NFT collection and creating NFTs on NFTs is easy! This guide explains how to set up your first collection",
    },
    {
      icon: Add,
      title: "Add Your NFTs",
      step: "03",
      content:
        "Sed ut perspiciatis un de omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
    },
    {
      icon: Sell,
      title: "List Them For Sale",
      step: "04",
      content:
        "Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs!",
    },
  ];
  return (
    <section id='explore' className='bg-bc2 md:px-10 px-4 py-20'>
      <section className="w-full flex justify-between">
        <span className="capitalize text-white text-2xl md:text-4xl font-medium">
          Create And Sell Your NFTs
        </span>
        <span
          className="uppercase text-bc text-base font-medium"
        >
        </span>
      </section>
      <section className="w-100 py-20">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {featuresData.map((item) => (
            <section className="relative bg-[#191926] rounded-2xl py-8 md:px-5 px-5">
              <section className="absolute -top-4 -right-4 flex justify-center mb-5">
                <img className="w-16" src={item?.icon} alt={item?.icon} />
              </section>
              <span className="text-base text-left text-neutral-400 md:leading-7">STEP {item?.step}</span>
              <h3 className="text-xl text-white font-bold mb-5 pt-8">{item.title}</h3>
              <p className="text-sm text-neutral-400 md:leading-7 mb-5">
                {item.content}
              </p>
              <FaArrowRight className="text-base text-neutral-400" />
            </section>
          ))}
        </section>
      </section>
    </section>
  )
}

export default Create