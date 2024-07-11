// import { Logo } from "../../components/shared/logo/Logo";
import GoogleLogo from "../../assets/icons/Google.png";
import { CustomInput } from "../../components/shared/inputs/CustomInput";
import { ButtonBg } from "../../components/shared/buttons/Buttons";
// import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import Logo from "../../components/shared/common/logo/Logo";
import { Link } from "react-router-dom";
// import { registerUser } from "../../features/userSlice";
// import { toast } from "react-toastify";
// import { toastOptions } from "../../utils/toast";
// import RoundLoader from "../../components/shared/loaders/RoundLoader";
// import { BASE_URL } from "../../utils/constants";

const Register = () => {
  // const dispatch = useDispatch();
  // const loading = useSelector((state) => state.user.loading);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // const handleGoogleLogin = () => {
  //   window.open(`${BASE_URL}/api/auth/google/callback`, "_self");
  // };
  // if (TOKEN) {
  //   window.location.href = "/feed";
  // }

  // Check if the URL contains the token after the Google login callback
  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const token = urlParams.get("token");

  //   if (token) {
  //     // Dispatch the loginSuccess action to store the token in Redux state
  //     // dispatch(loginSuccess(token));

  //     // Save the token in local storage
  //     localStorage.setItem("accessToken", token);

  //     // Remove the token from the URL query parameters
  //     window.location.href = "/feed";
  //   }
  // }, []);

  const handleChange = () => {
    // const { name, value } = e.target;
    setFormData({ ...formData });
  };

  // const handleRegister = (e) => {
  //   e.preventDefault();
  //   const payload = formData;
  //   // //console.log(payload)
  //   dispatch(registerUser(payload))
  //     .unwrap()
  //     .then((res) => {
  //       //console.log(res);
  //       if (res.status === false) {
  //         toast.error(res.message, toastOptions);
  //       }
  //       if (res.status === true) {
  //         toast.success(
  //           res.message +
  //             ", " +
  //             "You will be redirected in less than 3 seconds",
  //           toastOptions
  //         );
  //         setTimeout(() => {
  //           window.location.pathname = "/feed";
  //           // navigate("/app/dashboard");
  //         }, 3000);
  //       }
  //     })
  //     .catch((err) => {
  //       // //console.log(err);
  //       if (err.message) {
  //         toast.error(err.message, toastOptions);
  //       } else {
  //         toast.error("Something went wrong", toastOptions);
  //       }
  //     });
  // };
  return (
    <>
      <section className="w-full h-screen overflow-y-auto px-2 py-14 bg-dv">
        <section className="w-full flex justify-center pt-5 md:pt-10 pb-5">
          <Logo />
        </section>
        <section className="w-full mb-7 flex-col justify-center items-center gap-1 inline-flex">
          <section className="text-center text-white text-[22px] font-semibold">
            Create an Account
          </section>
          <section className="text-center text-neutral-400 text-opacity-80 text-sm font-normal">
            Sign up now to get started with an account.
          </section>
        </section>
        <section className="w-full mb-5 flex justify-center">
          <section
            // onClick={handleGoogleLogin}
            className="w-[335px] cursor-pointer h-14 px-3.5 py-2 rounded border border-para justify-center items-center gap-5 inline-flex"
          >
            <img className="w-[19px] h-[19px]" src={GoogleLogo} />
            <section className="text-center text-white text-opacity-95 text-base font-semibold">
              Continue with Google
            </section>
          </section>
        </section>
        <section className="w-full flex justify-center items-center mb-5">
          <div className="w-[126px] h-[0px] border border-para"></div>
          <div className="text-center text-para text-sm px-5 font-normal leading-[18.76px]">
            OR
          </div>
          <div className="w-[126px] h-[0px] border border-para"></div>
        </section>
        <section className="w-full flex justify-center items-center">
          <form className="w-full md:w-[700px]"
          // onSubmit={(e) => handleRegister(e)}
          >
            <section className="w-full md:flex md:gap-5">
              <CustomInput
                handleChange={handleChange}
                label={"First Name"}
                type={"text"}
                name={"first_name"}
                placeholder={"John"}
              />
              <CustomInput
                handleChange={handleChange}
                label={"Last Name"}
                type={"text"}
                name={"last_name"}
                placeholder={"Doe"}
              />
            </section>
            <CustomInput
              handleChange={handleChange}
              label={"Email Address"}
              type={"email"}
              name={"email"}
              placeholder={"johndoe@gmail.com"}
            />
            <CustomInput
              handleChange={handleChange}
              label={"Password"}
              type={"password"}
              name={"password"}
              placeholder={"Password"}
            />
            <section className="flex items-center mb-3">
              <input type="checkbox" className="bg-transparent outline-none" />
              <section className="pl-2">
                <span className="text-neutral-500 text-xs font-medium">
                  I have read and agree to the
                </span>
                <span className="text-violet-500 text-xs font-medium underline pl-1 cursor-pointer">
                  Terms of Service
                </span>
              </section>
            </section>
            <section className="w-full mb-3">
              {/* {loading ? (
                <ButtonBg
                  disable={
                    formData.email.trim() === "" ||
                    formData.password.trim() === ""
                  }
                >
                  <RoundLoader />
                </ButtonBg>
              ) : ( */}
              <ButtonBg
                className="py-3"
                onClick={() => { }}
                disabled={
                  formData.email.trim() === "" ||
                  formData.password.trim() === ""
                }
              >
                Sign Up
              </ButtonBg>
              {/* )} */}
            </section>
            <section className="flex justify-center items-center">
              <div className="text-center text-neutral-500 text-[13px] font-normal leading-none">
                Already have an account?
              </div>
              <div className="text-center text-white pl-1 text-[13px] font-semibold">
                <Link to="/login">Log in</Link>
              </div>
            </section>
          </form>
        </section>
      </section>
    </>
  );
};

export default Register;
