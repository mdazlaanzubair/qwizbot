import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const Signup = () => {
  // show / hide password state
  const [show, setShow] = useState(false);

  // schema for signup form with custom error messages
  const signUpSchema = yup.object().shape({
    name: yup
      .string("Full Name must be a string.")
      .required("Full Name is required.")
      .min(3, "Full Name must be more than 3 characters.")
      .max(35, "Full Name must not be more than 35 characters."),
    email: yup
      .string("Email must be a string.")
      .required("Email is required.")
      .email("Please enter a valid email."),
    password: yup
      .string("Password must be a string.")
      .required("Password is required.")
      .min(6, "Password must be more than 6 characters.")
      .max(20, "Password must not be more than 20 characters."),
    confirmPassword: yup
      .string("Password confirmation must be a string.")
      .oneOf([yup.ref("password"), null])
      .required("Password confirmation is required."),
  });

  // destructuring "useForm" hook and connecting to "yup" using "yupResolver"
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  // signup function
  const signup = (formData) => {
    console.log(formData.name);
    // checking errors
  };

  return (
    <div className="hero min-h-screen bg-base-200 py-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Ready to explore?</h1>
          <p className="py-6">
            Join us and experience the full potential of our platform by signing
            up today!
          </p>
        </div>
        <div className="w-full max-w-sm card shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(signup)}>
            <div className="form-control">
              <label className="label">
                {errors.name ? (
                  <span className="label-text text-error">
                    {errors.name.message}
                  </span>
                ) : (
                  <span className="label-text">Full Name</span>
                )}
              </label>
              <input
                {...register("name")}
                type="text"
                placeholder="e.g. John Doe"
                className={`input ${
                  errors?.name ? "input-error" : "input-bordered"
                }`}
              />
            </div>
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
                type={show ? "text" : "password"}
                placeholder="e.g. Any secret word"
                className={`input ${
                  errors?.password ? "input-error" : "input-bordered"
                }`}
              />
            </div>
            <div className="form-control">
              <label className="label">
                {errors.confirmPassword ? (
                  <span className="label-text text-error">
                    Your password must match the above field.
                  </span>
                ) : (
                  <span className="label-text">Confirmation</span>
                )}
              </label>
              <input
                {...register("confirmPassword")}
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
                className={`input ${
                  errors?.confirmPassword ? "input-error" : "input-bordered"
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
                Signup
              </button>
            </div>
            <div className="form-control mt-3 text-sm flex flex-row justify-around">
              Already have an account?{" "}
              <Link to="/login" className="inline link link-primary font-bold">
                Click here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
