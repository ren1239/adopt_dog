import React from "react";

function Navigation({ onRouteChange, isSignedIn }) {
  if (isSignedIn) {
    return (
      <nav className="flex justify-center">
        <p
          onClick={() => onRouteChange("signin")}
          className="f5 link dim underline pa3 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  }
}

export default Navigation;
