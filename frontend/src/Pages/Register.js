import React from "react";
import InputForm from "../Component/InputForm";
import SignIn from "../Component/SignIn";
import Navigation from "../Component/Navigation";
import { useState } from "react";

function Register() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [route, setRoute] = useState("signin");

  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
  });

  const onRouteChange = (route) => {
    if (route === "signin") {
      setIsSignedIn(false);
    } else if (route === "register") {
      setIsSignedIn(true);
    }
    setRoute(route);
  };

  const loadUser = (data) => {
    setUser({
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined,
    });
  };

  return (
    <div>
      <Navigation onRouteChange={onRouteChange} isSignedIn={isSignedIn} />
      {route === "register" ? (
        <div>
          <div className="Nav-Spacer"></div>
          <InputForm />
        </div>
      ) : route === "signin" ? (
        <SignIn
          onRouteChange={onRouteChange}
          loadUser={loadUser}
          isSignedIn={isSignedIn}
        />
      ) : null}
    </div>
  );
}

export default Register;
