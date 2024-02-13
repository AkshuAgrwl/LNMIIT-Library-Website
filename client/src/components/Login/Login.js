import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

const Login = () => {
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    console.log(Name, Password);
  }, [Name, Password]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();
  const SubmitFormHandler = () => {
    if (Name === "admin" && Password === "admin") {
      navigate("/chats");
    }
  };

  return (
    <div className="pt-32 flex justify-center items-center flex-col">
      <form onSubmit={SubmitFormHandler}>
        <div className="text-3xl m-4">Login</div>
        <div>
          <div className="flex text-center">
            <label className="m-2">Name</label>
            <input
              type="text"
              value={Name}
              name="name"
              className="border-2 border-black"
              onChange={handleNameChange}
            ></input>
          </div>

          <div className="flex text-center">
            <label className="m-2">Password</label>
            <input
              type="password"
              value={Password}
              name="password"
              className="border-2 border-black"
              onChange={handlePasswordChange}
            ></input>
          </div>
          <div
            className="text-3xl font-bold border-2 border-black m-2 text-center"
            onClick={SubmitFormHandler}
          >
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
