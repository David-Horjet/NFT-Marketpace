import { useDispatch, useSelector } from "react-redux";
import { toggleSidenav } from "../../../features/unauth-features/ActionSlice";
import Logo from "../common/logo/Logo";
import { RootState } from "../../../types/Interface";

const SideNav: React.FC = () => {
  const dispatch = useDispatch();
  const { sidenav } = useSelector((state: RootState) => state.action);
  const onToggle = () => {
    dispatch(toggleSidenav(!sidenav));
  };
  return (
    <>
      <div className="">
        <section
          className={`sidenav  md:inline-flex w-1/5 h-full bg-stone-950 border-r border-zinc-800 flex-col justify-start items-center gap-9  ${sidenav ? "sidenav-true" : "sidenav-false"
            }`}
        >
          <section className="h-full flex-col gap-y-[40px] items-center inline-flex py-[26px] ">
            <section className="flex-col gap-y-[8px] justify-between items-start inline-flex">
              <section className="mb-7" onClick={onToggle}>
                <Logo />
              </section>
            </section>
          </section>
        </section>
      </div>
    </>
  );
};

export default SideNav;
