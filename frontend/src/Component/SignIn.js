import React from "react";
import { useState } from "react";

function SignIn({ onRouteChange, loadUser }) {
  const [signInEmail, setSignInEmail] = useState("a@a.com"); // Default email``
  const [signInPassword, setSignInPassword] = useState("aaabbbccc"); // Default password

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      // If Enter key is pressed, trigger the onSubmit function
      onSubmitSignIn();
    }
  };

  const onEmailChange = (event) => {
    setSignInEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setSignInPassword(event.target.value);
  };

  const onSubmitSignIn = () => {
    // Mock user data for testing
    const mockUser = {
      id: "123",
      name: "Test User",
      email: signInEmail,
      entries: 0,
      joined: new Date(),
    };

    // Check if the credentials match your test credentials
    if (signInEmail === "dog@rescue.com" && signInPassword === "aaabbbccc") {
      loadUser(mockUser);
      onRouteChange("register"); // Navigate to home page on successful login
    } else {
      // Handle unsuccessful sign-in here, e.g., show an error message
      console.log("Invalid credentials");
    }
  };

  return (
    <div className=" flex justify-center ">
      <article
        className="rounded-lg bg-lightest my-4 shadow-lg justify-center flex items-center
    w-auto  md:w-1/2  lg:w-1/4"
      >
        <main className="p-4 text-gray-800">
          <div className="w-full">
            <fieldset id="sign_up" className="border-none p-0 m-0 text-center">
              <legend className="text-4xl  m-0 flex justify-center">
                Sign In
              </legend>
              <div className="mt-3">
                <label
                  className="block font-semibold text-base"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="p-2 border border-transparent focus:border-black focus:bg-white w-full"
                  type="email"
                  name="email-address"
                  id="email-address"
                  onChange={onEmailChange}
                />
              </div>
              <div className="my-3">
                <label
                  className="block font-semibold text-base"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="p-2 border border-transparent focus:border-black focus:bg-white w-full"
                  type="password"
                  name="password"
                  id="password"
                  onChange={onPasswordChange}
                  onKeyDown={handleEnterKey}
                />
              </div>
            </fieldset>
            <div className="flex justify-center">
              <input
                onClick={onSubmitSignIn}
                className="  transition duration-300 ease-in-out transform hover:scale-105  rounded-xl px-4 bg-primary"
                type="submit"
                value="Sign in"
              />
            </div>
          </div>
        </main>
      </article>
    </div>
  );
}

export default SignIn;
