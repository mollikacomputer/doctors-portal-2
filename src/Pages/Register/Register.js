import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import GridLoader from "react-spinners/GridLoader";
import { Link } from "react-router-dom";

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

  let signInError;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();


if(loading || gLoading){
  return <GridLoader color="#36d7b7" />
}

if(user || gUser){
  console.log(user, gUser);
}
  if (gUser) {
    console.log(gUser.user.displayName, gUser.user.email);
  };

if(error || gError){
  signInError = <p className="text-red-500"> { error?.message || gError?.message } </p>
}
  const onSubmit = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password);
  };
    return (
<div className="flex h-screen justify-center items-center ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold"> Register </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">What is your Name?</span>
              </label>
              <input
                type="name"
                placeholder="Type Name"
                class="input input-bordered w-full max-w-xs"
                {...register("name", 
                {
                  required:{
                    value:true,
                    message:'Name field is required'
                  },
                }
                )}
              />
              <label class="label">
              {errors.name?.type === "required" && (<p role="alert" className="text-red-500"> {errors.name?.message} </p>)} 
              </label>
            </div>
            <div class="form-control w-full max-w-xs">
              <label class="label">
                <span class="label-text">What is your Email?</span>
              </label>
              <input
                type="email"
                placeholder="Type Email"
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
            {signInError}
            <input type="submit" value="Login" className="btn w-full" />
          </form>
          {signInError}
          Old to Doctors Portal? <span className="text-primary" > <Link to="/register" > Register </Link>   </span>
        </div>
      </div>
    </div>
    );
};

export default Register;