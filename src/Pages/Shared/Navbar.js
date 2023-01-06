import React from "react";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { GridLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signOut, signoutLoading, signoutError] = useSignOut(auth);
  const navigate = useNavigate();
  const signOutNotify = () => toast("Sign Out Successfully");
  if (error || signoutError) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading || signoutLoading) {
    return <GridLoader color="#36d7b7" />;
  }
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li tabindex="0">
              <Link to={"/about"}> About </Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
            <li>
              <Link to={"/appointments"}>Appointment</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          daisyUI
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li tabindex="0">
            <Link to={"/about"}> About </Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
              <Link to={"/appointments"}>Appointment</Link>
            </li>
            <li>
            {user 
            ?
            <Link 
            onClick={async () => {
              const success = await signOut();
              navigate('/');
              
              if (success) {
              await signOutNotify;

              }
            }
          }
            >Log Out</Link> :<Link to={"/login"}>Login</Link>}
          </li>
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
