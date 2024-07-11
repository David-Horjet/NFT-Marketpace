import React from 'react'
import PropList from '../common/propList/PropList';
import { ButtonBg } from '../buttons/Buttons';
import { useNavigate } from 'react-router-dom';

const Listings: React.FC = () => {
    const navigate = useNavigate();
    const rooms = [
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
        {
            displayImage: "https://res.cloudinary.com/dmabljsyn/image/upload/v1705164307/Caretaker/zxl4m7robktdgonwxjrt.jpg",
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
                profilePic: "https://storage.googleapis.com/theme-vessel-items/checking-sites/real-house-2-html/HTML/main/img/avatar/avatar-1.jpg"
            },
            postedDate: "24 July 2024"
        },
    ];
    return (
        <section id='listings' className='bg-white md:px-10 px-4 py-20'>
            <section className="w-full text-center">
                <span className="uppercase text-bc text-base font-medium tracking-widest">
                    Best Rent Properties
                </span>
                <h1
                    className="text-center font-semibold text-black md:text-4xl text-lg py-3 capitalize"
                >Featured Properties</h1>
            </section>
            <section className="w-100 py-10">
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {rooms.map((propList) => (
                        <PropList propList={propList} />
                    ))}
                </section>
            </section>
            <section className="w-full flex justify-center">
                <section className="w-fit">
                    <ButtonBg
                        onClick={() => navigate("/register")} className=' bg-bc px-5 py-4'>Browse More Properties
                    </ButtonBg>
                </section>
            </section>
        </section>
    )
}

export default Listings