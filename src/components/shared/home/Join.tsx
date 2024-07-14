import { useState } from "react";
import { ButtonBg } from "../buttons/Buttons"
import { CustomInput } from "../inputs/CustomInput"

const Join = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = () => {
        // const { name, value } = e.target;
        setFormData({ ...formData });
    };
    return (
        <section className={`bg-bc2 bg-[url("https://res.cloudinary.com/dvwvizxtz/image/upload/v1714208155/StudConnect/hy5os4sgvqrmofm29xgn.png")] bg-cover w-full z-10 relative bg-no-repeat bg-dvblue py-24`}>
            <section className="w-full  text-center">
                <span className="uppercase text-white text-base font-medium tracking-widest">Join our newsletter</span>
                <h1
                    className="my-6 text-center text-white md:text-[40px] text-[26px] capitalize"
                >
                    Weekly FREE NFT resource straight to your inbox
                </h1>
                <section className="w-fit mx-auto">
                    <CustomInput
                        handleChange={handleChange}
                        type={"email"}
                        name={"last_name"}
                        placeholder={"example@gmail.com"}
                    />
                    <ButtonBg className="bg-bc px-10 py-3" onClick={function (): void {
                        throw new Error("Function not implemented.")
                    }}>Join</ButtonBg>
                </section>
            </section>
        </section>
    )
}

export default Join