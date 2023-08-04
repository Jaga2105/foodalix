import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../utils/authSlice";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/images/FoodAlix.jpeg";
import { toast } from "react-toastify";

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const validateEmail = () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        setEmailError('Please enter a valid email address');
        return false;
      }
      setEmailError('');
      return true;
    };
  
    const validatePassword = () => {
      
      const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/;
      if (!passwordPattern.test(password)) {
        setPasswordError(`Password must be at least 6 characters 
        and contain one uppercase letter, 
        one lowercase letter, and one number.`);
        return false;
      }
      setPasswordError('');
      return true;
    };
  
    const handleSignUpSubmit = async (e) => {
      e.preventDefault();
      const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
      if(email==="" || password===""){
        toast.error("Enter all credentials")
      }else if(isEmailValid && isPasswordValid){
      try {
        await dispatch(signUp({ email, password }));
        navigate("/signin");
        toast.success("successfully registered");
      } catch (e) {
        // setError(e.message);
        console.log(e.message);
      }
    }
    };
  
  
  return (
    <div>
      <section className="h-screen">
        <div className="px-6 py-12 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-dark">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
              <div className="flex justify-center mb-6">
                <img src={logo} class="w-[20%]" alt="Phone image" />
              </div>
              <form onSubmit={handleSignUpSubmit}>
                <div className="mb-6">
                  <input
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
                    placeholder="Email address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {emailError && <span className="text-red">{emailError}</span>}
                </div>

                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-dark bg-white bg-clip-padding border border-solid border-gray rounded transition ease-in-out m-0 focus:text-gray-dark focus:bg-white focus:border-yellow focus:outline-none"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  
                </div>
                <div className="mb-6 w-[400px]">
                  {/* <span className="error-text">{error && error} </span> */}
                  {passwordError && <span className="text-red  break-words">{passwordError}</span>}
                </div>

                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-yellow text-blue-dark font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-yellow hover:shadow-lg focus:bg-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Sign Up
                </button>

                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray before:mt-0.5 after:flex-1 after:border-t after:border-gray after:mt-0.5">
                  <p className="text-center text-bio font-semibold mx-4 mb-0">
                    OR
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-md font-semibold mt-2 pt-1 mb-0 text-blue-dark">
                    Already have an account ?
                    <Link
                      to="/"
                      className="text-red ml-2 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out underline"
                    >
                      Sign in.
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;