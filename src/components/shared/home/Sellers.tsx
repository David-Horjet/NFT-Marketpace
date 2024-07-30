import React from 'react'
import SellerItem from '../common/sellerItem/SellerItem';

const Sellers: React.FC = () => {
    const sellers = [
        {
            fullName: "Perry Rackat",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-8.jpg"
        },
        {
            fullName: "Matt Armos",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-6.jpg"
        },
        {
            fullName: "Monica Lucas",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-9.jpg"
        },
        {
            fullName: "Hyper Whiller",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-7.jpg"
        },
        {
            fullName: "Crrispin berry",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-1.jpg"
        },
        {
            fullName: "Samson Forest",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-2.jpg"
        },
        {
            fullName: "Bake banks",
            amount: "58.45 ETH",
            profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-4.jpg"
        },
    ];
    return (
        <section id='explore' className='bg-bc2 md:px-10 px-4 py-20'>
            <section className="w-full flex justify-between items-center">
                <span className="capitalize text-white  text-2xl md:text-4xl font-medium">
                    Top Sellers
                </span>
                <span
                    className="uppercase text-bc text-base font-medium"
                >
                </span>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-7 gap-8">
                    {sellers.map((seller, i) => (
                        <SellerItem key={i} seller={seller} />
                    ))}
                </section>
            </section>
        </section>
    )
}

export default Sellers