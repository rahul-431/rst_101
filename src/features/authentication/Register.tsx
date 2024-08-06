import { useGoogleLogin } from "@react-oauth/google";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { NavLink } from "react-router-dom";
type RegisterFormType = {
  cpassword: string;
  email: string;
  password: string;
};
const Register = () => {
  const { register, handleSubmit } = useForm<RegisterFormType>();

  const handleLogin = (data: RegisterFormType) => {
    console.log(data);
  };
  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      const gt: GoogleLoginRequest = { access_token: response.access_token };
      console.log(gt);
    },
    onError: () => {
      console.log("something went wrong");
    },
  });
  return (
    <section>
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8">
        <div className="w-full rounded-lg shadow-md shadow-black dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="mb-8 text-xl font-bold leading-tight tracking-tight  md:text-2xl text-center">
              Create an account
            </h1>
            <div className="text-center flex flex-col gap-3">
              <button
                onClick={() => googleLogin()}
                type="button"
                className="border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
              >
                <span className="me-2 text-red-500">
                  <FaGoogle />
                </span>{" "}
                <span>Sign in with Google</span>
              </button>
              <span>Or</span>
              <hr />
            </div>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit(handleLogin)}
            >
              <div>
                <label htmlFor="email" className="block mb-2  font-medium">
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label htmlFor="password" className="block mb-2  font-medium">
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  name="password"
                  id="password"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                />
              </div>
              <div>
                <label htmlFor="cpassword" className="block mb-2  font-medium">
                  Confirm Password
                </label>
                <input
                  {...register("cpassword", { required: true })}
                  type="password"
                  name="cpassword"
                  id="cpassword"
                  className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg  block w-full p-2.5"
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-yellow-600 hover:bg-yellow-500  font-medium rounded-lg px-5 py-2.5 text-center"
              >
                Sign up
              </button>

              <p className="text-center font-light">
                Already have an account?{" "}
                <NavLink to="/login" className="underline">
                  Login
                </NavLink>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
