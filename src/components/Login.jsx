import React from "react";
import Input from "./Input";
import Button from "./Button";

function LoginForm() {
  return (
    <form className="form">
      <Input type={"text"} placeholder={"Username"} />
      <Input type={"password"} placeholder={"Password"} />
      <Button type={"submit"} value={"Login"} />
    </form>
  );
}

export default LoginForm;
