import { useNavigate } from "react-router-dom"
import { FaUsers } from "react-icons/fa"
import { MdConnectWithoutContact } from "react-icons/md"
import { ButtonBg } from "../buttons/Buttons"
import { GoPasskeyFill } from "react-icons/go"

const About = () => {
  const iconStyles = "text-2xl md:text-3xl text-para"
  const steps = [
    {
      icon: <GoPasskeyFill className={iconStyles} />,
      title: "No of Users",     
      descrip: "230k"
    },
    {
      icon: <MdConnectWithoutContact className={iconStyles} />,
      title: "Rented Properties",
      descrip: "459M"
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "No of Agents",
      descrip: "405"
    },
    {
      icon: <FaUsers className={iconStyles} />,
      title: "No of Agents",
      descrip: "789k"
    },
  ]
  const navigate = useNavigate()
  return (
    <section id="about" className="relative z-10 bg-dv py-20 md:px-14 px-2">
      <section className="w-full flex flex-col md:flex-row gap-10 items-center">
        <section className="w-full md:w-1/2">
          <h3 className="text-bc font-medium text-lg md:text-xl mb-3 text-center md:text-left">About Us</h3>
          <h2 className="text-black font-medium text-3xl md:text-4xl mb-8 text-center md:text-left">Why Choose Us?</h2>
          <p className="text-para text-center md:text-left text-sm md:text-lg font-medium mb-8">ResiLink simplifies the process of finding your next home. Welcome to ResiLink, your ultimate destination for connecting with available residences around you, ResiLink simplifies the process of finding your next home. Welcome to ResiLink, your ultimate destination for connecting with available residences around you, </p>
          <section className="w-full flex justify-center md:justify-start">
            <section className='w-fit'>
              <ButtonBg className='bg-bc px-10 py-3' onClick={function (): void {
                navigate("/register")
              }}>Get Started</ButtonBg>
            </section>
          </section>
        </section>
        <section className="w-full md:w-1/2">

          <section className="grid grid-cols-2 gap-10">
            {steps.map((step) => (
              <section className="flex flex-col md:flex-row gap-4">
                <section className="flex flex-row md:flex-col justify-center">
                  <section className="bg-[#6f79832b]  w-fit p-3 md:p-5  justify-center flex items-center rounded-full">{step.icon}</section>
                </section>
                <section className="flex flex-col gap-3">
                  <h3 className="text-center md:text-left text-bc text-xs md:text-base font-semibold">{step.title}</h3>
                  <p className="text-para text-center md:text-left text-sm md:text-3xl font-medium">{step.descrip}</p>
                </section>
              </section>
            ))}
          </section>
        </section>
      </section>
    </section>
  )
}

export default About