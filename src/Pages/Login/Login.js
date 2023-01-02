import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  if (user) {
    console.log(user);
  }
  const onSubmit = (data) => console.log(data);
  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold"> Login </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">What is your Email?</span>
              </label>
              <input
                type="email"
                placeholder="Type here"
                class="input input-bordered w-full max-w-xs"
                {...register("email", 
                {
                  required:{
                    value:true,
                    message:'email field is required'
                  },
                  pattern: {
                    value: /[A-Za-z]{3}/,
                    message: 'Please provide a valid email' 
                  }
                }
                )}

              />
              <label class="label">
              {errors.email?.type === "required" && (<p role="alert" className="text-red-500"> {errors.email?.message} </p>)}
              {errors.email?.type === "pattern" && (<p role="alert" className="text-red-500"> {errors.email?.message} </p>)} 
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">Password?</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full max-w-xs"
                {...register("password", 
                {
                  required:{
                    value:true,
                    message:'password field is required'
                  },
                  minLength:{
                    value: 6,
                    message: 'Password at least 6 character length' 
                  }
                }
                )}

              />
              <label class="label">
              {errors.password?.type === "required" && (<p role="alert" className="text-red-500"> {errors.password?.message} </p>)}
              {errors.password?.type === "minLength" && (<p role="alert" className="text-red-500"> {errors.password?.message} </p>)} 
              </label>
            </div>
           

            <input
              
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input type="submit" />
          </form>

          <div className="divider"> Or </div>
          <button class="btn btn-outline" onClick={() => signInWithGoogle()}>
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
