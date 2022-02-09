import React, { useState } from "react";
import "./login.css";
import { InputAdornment, Divider, TextField } from "@mui/material";
import Button from "./components/Button";
//import TextField from "./components/TextField";
import validate from "./utils";
import email from "./Images/email.svg";
import password from "./Images/password.svg";
import logo from "./Images/logo.svg";
import bg from "./Images/bg1.png";

function Login() {
  const fields = { email: "", password: "" }
  const [loginState, setLoginState] = useState(fields);
  const [errorState, setErrorState] = useState(fields);

  function onChangeHandler(e) {
    const { name, value } = e.target;

    setLoginState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrorState((prevState) => ({
      ...prevState,
      [name]: "",
    }));
  }

  function onLogin(e) {
    e.preventDefault();
    const error = validate(loginState, fields);
    setErrorState(error);
  }

  return (
    <div className="wrapper">
      <div className="left_container">
        <div className="container">
          <img src={logo} alt="logo" className="logo" />
          <form className="form_container">
            <h2>Login</h2>
            <div className="input_container">
              <TextField
                id="email"
                name="email"
                label="Email Address"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={email} alt="email-icon" />
                    </InputAdornment>
                  ),
                }}
                value={loginState.email}
                error={false || errorState.email !== ""}
                helperText={errorState.email}
                onChange={onChangeHandler}
              />
              <TextField
                id="password"
                name="password"
                label="Password"
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img src={password} alt="password-icon" />
                    </InputAdornment>
                  ),
                }}
                value={loginState.password}
                error={false || errorState.password !== ""}
                helperText={errorState.password}
                onChange={onChangeHandler}
              />
              <Button variant="contained" onClick={onLogin}>
                Login
              </Button>

              <Divider />
            </div>
            <Button variant="text">Forgot Password?</Button>
          </form>
        </div>
      </div>

      <div className="right_container">
        <div className="banner_text">
          Building the future of dental technology together.
        </div>
        <img src={bg} alt="background" className="banner_bg" />
      </div>
    </div>
  );
}

export default Login;
