import { GrAnchor } from "react-icons/gr";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <section className="w-[120px]">
        <Link className="flex items-center gap-2 text-2xl" to={"/"}>
          <GrAnchor className="text-bc" />
          <span className="text-white">Anchor</span>
        </Link>
      </section>
    </>
  );
};

export default Logo;
