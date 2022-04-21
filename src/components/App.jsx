import React from "react";
import Register from "./Register";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <Login /> : <Register />}
    </div>
  );
}

export default App;
