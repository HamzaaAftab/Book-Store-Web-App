import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import list from "../../public/list.json";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
  const modalRef = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
    // Close the modal after form submission
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <div>
      <>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <dialog id="my_modal_3" className="modal dark:text-black" ref={modalRef}>
          <div className="modal-box dark:bg-slate-900 dark:text-white">
            <form onSubmit={handleSubmit(onSubmit)} method="post">
              {/* if there is a button in form, it will close the modal */}
              <button type="button" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => modalRef.current.close()}>
                ✕
              </button>

              {/* INPUT FORM */}
              <div className="relative mx-auto w-full max-w-md bg-white px-5 pt-7 pb-5 rounded-none sm:rounded-xl sm:px-10 border-none">
                <div className="w-full">
                  <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                    <p className="mt-2 text-gray-500">
                      Sign in below to access your account
                    </p>
                  </div>
                  <div className="mt-5">
                    <div className="relative mt-6">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email Address"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        autoComplete="off"
                        {...register("email", { required: true })}
                      />
                      <br />
                      {errors.email && <span className={`text-sm text-red-700 mt-4`}>This field is required</span>}
                      <label
                        htmlFor="email"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative mt-6">
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none"
                        {...register("password", { required: true })}
                      />
                      <br />
                      {errors.password && <span className={`text-sm text-red-700 mt-4`}>This field is required</span>}
                      <label
                        htmlFor="password"
                        className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800"
                      >
                        Password
                      </label>
                    </div>
                    <div className="my-6">
                      <button
                        type="submit"
                        className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none"
                      >
                        Sign in
                      </button>
                    </div>
                    <p className="text-center text-sm text-gray-500">
                      Don't have an account yet?{" "}
                      <a
                        href="/signup"
                        className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none"
                      >
                        Sign up
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </>
    </div>
  );
}

export default Login;
