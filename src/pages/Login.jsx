import { Link, useNavigate } from "react-router-dom";
import { BsGoogle, BsGithub, BsDiscord } from "react-icons/bs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { supabase } from "../helpers/functions/supaConfig";
import { useEffect } from "react";
import { supaLoginProvider } from "../helpers/functions/authenticator";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
  // redirect user if already logged-in
  const navigator = useNavigate();
  const { user } = useAuth();

  // schema for login form with custom error messages
  const loginSchema = yup.object().shape({
    email: yup
      .string("Email must be a string.")
      .required("Email is required.")
      .email("Please enter a valid email."),
    password: yup
      .string("Password must be a string.")
      .required("Password is required.")
      .min(6, "Password must be more than 6 characters.")
      .max(20, "Password must not be more than 20 characters."),
  });

  // destructuring "useForm" hook and connecting to "yup" using "yupResolver"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  // login function
  const login = async (formData) => {
    // loginWithRedirect();
    console.log(formData.email);
    // checking errors
  };

  // checking auth state of user when the component loads
  useEffect(() => {
    user ? navigator("/") : navigator("/login");
  }, []);

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left lg:mx-10">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
          <p className="py-6">
            Glad to see you again. Now Login to access the Power of AI.
          </p>
          <div className="divider pb-6">OR</div>
          <div className="grid grid-cols-1 gap-3">
            <button
              type="button"
              className="btn btn-neutral btn-block btn-lg text-xs"
              onClick={() => supaLoginProvider("google")}
            >
              <BsGoogle size={20} className="mr-2" />
              Login with Google
            </button>
            <button
              type="button"
              className="btn btn-neutral btn-block btn-lg text-xs"
              onClick={() => supaLoginProvider("github")}
            >
              <BsGithub size={20} className="mr-2" />
              Login with Github
            </button>
            <button
              type="button"
              className="btn btn-neutral btn-block btn-lg text-xs"
              onClick={() => supaLoginProvider("discord")}
            >
              <BsDiscord size={20} className="mr-2" />
              Login with Discord
            </button>
          </div>
        </div>
        <div className="w-full max-w-sm card shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(login)}>
            <div className="form-control">
              <label className="label">
                {errors.email ? (
                  <span className="label-text text-error">
                    {errors.email.message}
                  </span>
                ) : (
                  <span className="label-text">Email Address</span>
                )}
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="e.g. abc@example.com"
                className={`input ${
                  errors?.email ? "input-error" : "input-bordered"
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                {errors.password ? (
                  <span className="label-text text-error">
                    {errors.password.message}
                  </span>
                ) : (
                  <span className="label-text">Password</span>
                )}
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="e.g. Any secret word"
                className={`input ${
                  errors?.password ? "input-error" : "input-bordered"
                }`}
              />
              <label className="label">
                <span className="label-text-alt"></span>
                <span
                  className="label-text-alt link link-primary"
                  onClick={() => setShow(!show)}
                >
                  show
                </span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
            <div className="form-control mt-3 text-sm flex flex-row justify-around">
              Don't have an account yet?{" "}
              <Link to="/signup" className="inline link link-primary font-bold">
                Click here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
