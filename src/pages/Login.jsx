import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { doSignInWithEmailAndPassword } from "../config/auth";
import { useAuth } from "../context/authContext";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const Login = () => {
  const { userLoggedIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSigningIn(true);
      await doSignInWithEmailAndPassword(email, password);
    } catch (err) {
      alert("This user doesn't exist");
      setIsSigningIn(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <Box sx={{ width: "20%" }}>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <main>
        <Typography variant="h3">Welcome Back!</Typography>

        <form onSubmit={onSubmit}>
          <div>
            <label>
              <Typography variant="body1">Email</Typography>
            </label>
            <input
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div>
            <label>
              <Typography variant="body1">Password</Typography>
            </label>
            <input
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          {errorMessage && <span>{errorMessage}</span>}

          <Button
            variant="outlined"
            type="submit"
            sx={{
              my: 2,
              borderColor: "black",
              borderWidth: "3px",
              color: "black",
              fontWeight: 700,
            }}
          >
            {isSigningIn ? "Signing In..." : "Sign In"}
          </Button>
        </form>

        <Typography variant="body1">
          Don't have an account?<Link to={"/register"}> Sign up</Link>
        </Typography>
      </main>
    </Box>
  );
};

export default Login;
