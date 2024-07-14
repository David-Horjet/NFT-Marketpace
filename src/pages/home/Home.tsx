import Hero from "../../components/shared/home/Hero"
import Explore from "../../components/shared/home/Explore"
import Sellers from "../../components/shared/home/Sellers"
import Todays from "../../components/shared/home/Todays"
import Collection from "../../components/shared/home/Collection"
import Create from "../../components/shared/home/Create"
import Footer from "../../components/shared/home/Footer"
import Join from "../../components/shared/home/Join"

const Home = () => {

    return (
        <section className="relative w-full">
            <Hero />
            <Explore />
            <Sellers />
            <Todays />
            <Collection/>
            <Create/>
            <Join/>
            <Footer/>
        </section>
    )
}

export default Home