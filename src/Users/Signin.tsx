import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "./client";
import * as client from "./client";
export default function Signin() {
  const [credentials, setCredentials] = useState<User>({
    _id: "",
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "USER",
  });
  const navigate = useNavigate();
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account/Profile");
  };
  const signup = async () => {
    await client.signup(credentials);
    navigate("/Kanbas/Account/Signup");
  };
  return (
    <div>
      <h1>Sign In</h1>
      <input
        className="form-control"
        placeholder="Username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        className="form-control"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <br />
      <button className="btn btn-primary" onClick={signin}>
        {" "}
        Sign in{" "}
      </button>
      <button className="btn btn-primary" onClick={signup}>
        {" "}
        Sign up{" "}
      </button>
    </div>
  );
}
