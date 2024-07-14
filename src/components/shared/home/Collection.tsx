import React from 'react'
import { ButtonBg } from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';
import NftItem from '../common/nftItem/NftItem';
import { TbCategory2 } from 'react-icons/tb';
import NftColl from '../common/nftColl/NftColl';

const Collection: React.FC = () => {
    const navigate = useNavigate();
    const rooms = [
        {
            displayImage: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-11.jpg",
            listingType: "Rent",
            amount: "₦50,000",
            rentalPeriod: "yr",
            propertyName: "Park Avenue",
            location: "No 23, Ilebaye Street, Ekosodin",
            bedrooms: 2,
            bathrooms: 1,
            sqFt: 3400,
            garage: 1,
            agentInCharge: {
                title: "Mr",
                firstName: "Perry",
                profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-13.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
            listingType: "Rent",
            amount: "₦50,000",
            rentalPeriod: "yr",
            propertyName: "Park Avenue",
            location: "No 23, Ilebaye Street, Ekosodin",
            bedrooms: 2,
            bathrooms: 1,
            sqFt: 3400,
            garage: 1,
            agentInCharge: {
                title: "Mr",
                firstName: "Perry",
                profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-14.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
            listingType: "Rent",
            amount: "₦50,000",
            rentalPeriod: "yr",
            propertyName: "Park Avenue",
            location: "No 23, Ilebaye Street, Ekosodin",
            bedrooms: 2,
            bathrooms: 1,
            sqFt: 3400,
            garage: 1,
            agentInCharge: {
                title: "Mr",
                firstName: "Perry",
                profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-11.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
            listingType: "Rent",
            amount: "₦50,000",
            rentalPeriod: "yr",
            propertyName: "Park Avenue",
            location: "No 23, Ilebaye Street, Ekosodin",
            bedrooms: 2,
            bathrooms: 1,
            sqFt: 3400,
            garage: 1,
            agentInCharge: {
                title: "Mr",
                firstName: "Perry",
                profilePic: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg"
            },
            postedDate: "24 July 2024"
        },
    ];
    return (
        <section id='explore' className='bg-bc2 md:px-10 px-4 py-20'>
            <section className="w-full flex items-center justify-between">
                <span className="capitalize text-white text-2xl md:text-4xl">
                    Popular Collection
                </span>
                <span
                    className="uppercase text-bc text-sm md:text-base font-medium"
                >EXPLORE MORE
                </span>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {rooms.map((nft) => (
                        <NftColl nft={nft} />
                    ))}
                </section>
            </section>
            <section className="w-full flex justify-center">
                <section className="w-fit">
                    <ButtonBg
                        onClick={() => navigate("/register")} className=' bg-bc px-10 py-4'>Explore More
                    </ButtonBg>
                </section>
            </section>
        </section>
    )
}

export default Collection