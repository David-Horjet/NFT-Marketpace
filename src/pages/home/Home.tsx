import About from "../../components/shared/home/About"
import Hero from "../../components/shared/home/Hero"
import Listings from "../../components/shared/home/Listings"

const Home = () => {

    return (
        <section className="relative w-full">
            <Hero />
            <Listings/>
            <About />
        </section>
    )
}

export default Home