/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
// import loginBgR from "../../assets/loginBgR.svg";
// import loginBgL from "../../assets/loginBgL.svg";
import InputField from "@/ui/InputField";
import { useAuthStore } from "@/store/useAuthStore";
import { useAuthMutation } from "@/hooks/useMutateData";
import Button from "@/ui/Button";

const loginSchema = Yup.object().shape({
  identity: Yup.string()
    .required("Required")
    .max(36, "Must be 36 characters or less"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const { setUser } = useAuthStore();
  const authMutation = useAuthMutation();
  const [error, setError] = useState();
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  const onSubmitHandler = async (data) => {
    try {
      const result = await authMutation.mutateAsync(["post", "", data]);
      console.log("result", result)
      setUser({ token: result?.data?.access, refresh: result?.data?.refresh });
      console.log("Login Successfully")
      navigate("/");
      reset();
    } catch (error) {
      let errorMessage = error?.response?.data?.error
        ? error?.response?.data?.message?.toString()
        : error?.message?.toString();
      setError(error?.response?.data?.errors);
      console.log("error", errorMessage)
    }
  };

  console.log("watch", watch())


  const [usingMobile, setUsingMobile] = useState(false);

  return (
    //
    <div className=" flex flex-col ">
      {/* <img src={loginBgR} className="absolute right-0 sm:w-7" alt="" /> */}
      <div className="flex md:justify-center px-4">
        <img className="h-20 w-20" src={logo} alt="logo" />
      </div>
      <div className="md:items-center md:justify-center flex flex-col">

        <div className="flex flex-col items-center md:justify-center mt-20 ">
          <div className="flex flex-col items-center">
            <div className="flex flex-col gap-2 mb-10 md:items-center tracking-tight md:justify-center text-2xl sm:text-xl font-bold ">
              <p className="text-[#4D4D4D]">Log in</p>
              <p className="text-[#666] text-sm ">
                Enter your credentials to login to your account.
              </p>
            </div>
            <form
              onSubmit={handleSubmit(onSubmitHandler)}
              className="flex w-full flex-col gap-3 md:px-4 "
            >
              <div className="rounded-md">
                <p className="text-red-600 text-xs">
                  {errors?.identity?.message ?? error?.identity}
                </p>
                <InputField
                  className="outline-none bg-white w-full text-sm"
                  register={register}
                  // {...register("identity", {
                  //   required: true,
                  //   pattern: {
                  //     value:
                  //       /^9\d{9}|[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                  //     message: "Invalid email or phone number",
                  //   },
                  // })}
                  name="identity"
                  type="text"
                  placeholder="Email or Phone number"
                />
              </div>
              <div className="rounded-md">
                <p className="text-red-600 text-xs">
                  {errors?.password?.message ?? error?.password}
                </p>
                <InputField
                  className="outline-none bg-white w-full text-sm"
                  register={register}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div
                className={`tracking-tight flex gap-2 justify-between sm:my-4 ${!usingMobile ? "my-2" : " my-5 "
                  }`}
              >
                <p className="text-red text-sm lg:text-xs whitespace-nowrap cursor-pointer ">
                  Forgot your password?
                </p>
                <p
                  onClick={() => setUsingMobile(!usingMobile)}
                  className="text-theme-color text-sm lg:text-xs whitespace-nowrap cursor-pointer underline"
                >
                  Continue using {!usingMobile ? "mobile" : "email"}{" "}
                </p>
              </div>
              <img
                // src={loginBgL}
                className="hidden md:block bottom-0 absolute justify-start left-0 sm:w-7"
                alt=""
              />
              <Button buttonName={"Login"} className={"w-full "} icon={undefined} />

            </form>
          </div>
          <div className="flex whitespace-nowrap justify-center tracking-tight text-sm gap-1 mt-20">
            <p className="text-[#666]">Don’t have an account? </p>

            <p
              onClick={() => navigate("/signup")}
              className="text-theme-color cursor-pointer underline"
            >
              Create a free account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
