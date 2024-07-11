import { useLocation, useOutlet } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";

const MainLayout = () => {
  const outlet = useOutlet();
  const location = useLocation();
  const currentRoute = location.pathname;
  console.log(currentRoute);

  return (
    <>
      <section className="overflow-x-hidden p-0 w-full flex">
        <section className="w-full flex">
          <Navbar/>
          {outlet}
        </section>
      </section>
    </>
  );
};

export default MainLayout;
