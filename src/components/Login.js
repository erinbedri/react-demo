import React, { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  });

  const changeHandler = (e) => {
    setFormData((oldState) => ({
      ...oldState,
      [e.target.name]:
        e.target.type == "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className="login">
      <h2 className="login--title">Login</h2>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            value={formData.username}
            id="username"
            onChange={changeHandler}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            id="password"
            onChange={changeHandler}
          />
        </div>

        <div>
          <input
            type="checkbox"
            name="rememberMe"
            value={formData.rememberMe}
            id="rememberMe"
            onChange={changeHandler}
          />
          <label htmlFor="rememberMe"> Remember me</label>
        </div>

        <button>Login</button>
      </form>
    </div>
  );
}
