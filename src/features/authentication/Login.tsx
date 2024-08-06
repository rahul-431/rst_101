import { useForm } from "react-hook-form";

import { FaGoogle } from "react-icons/fa";
import Navitem from "../../ui/Navitem";
import { useGoogleLogin } from "@react-oauth/google";
type LoginForm = {
  email: string;
  password: string;
};
const Login = () => {
  const { register, handleSubmit } = useForm<LoginForm>();
  const handleLogin = (data: LoginForm) => {
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
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8 bg-yellow-50">
        <div className="w-full rounded-lg shadow-md shadow-black dark:border md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="mb-8 text-xl font-bold leading-tight tracking-tight  md:text-2xl text-center">
              Log in!
            </h1>
            <div className="text-center flex flex-col gap-3">
              <button
                onClick={() => googleLogin()}
                type="button"
                className="text-base border border-gray-200 hover:bg-gray-100 px-4 py-2 rounded-lg flex items-center justify-center gap-2"
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
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium"
                >
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
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium"
                >
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
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember">Remember me</label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign in
              </button>

              <p className="text-center text-base font-light">
                Don’t have an account yet?{" "}
                <Navitem to="/register" name="Sign up" />
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
