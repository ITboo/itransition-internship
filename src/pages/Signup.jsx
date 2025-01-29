import React, { useState } from "react";
import { Navigate, Link, useNavigate } from "react-router-dom";
import { doCreateUserWithEmailAndPassword } from "../config/auth";
import { useAuth } from "../context/authContext";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Register = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { userLoggedIn } = useAuth();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistering) {
      setIsRegistering(true);
      await doCreateUserWithEmailAndPassword(email, password);
    }
  };

  return (
    <Box sx={{ width: "20%" }}>
      {userLoggedIn && <Navigate to={"/home"} replace={true} />}

      <main>
      <Typography variant="h3">Create a New Account</Typography>
          <form onSubmit={onSubmit}>
            <div>
              <label><Typography variant="body1">Email</Typography></label>
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
              <Typography variant="body1">
                Password
                </Typography>
              </label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}                              />
            </div>

            <div>
              <label>
              <Typography variant="body1">Confirm Password</Typography>
              </label>
              <input
                disabled={isRegistering}
                type="password"
                autoComplete="off"
                required
                value={confirmPassword}
                onChange={(e) => {
                  setconfirmPassword(e.target.value);
                }}                
              />
            </div>

            {errorMessage && (
              <span>{errorMessage}</span>
            )}

<Button
            variant="outlined"
            type="submit"
            sx={{
              my: 2,
              borderColor: "black",
              borderWidth: "3px",
              color: "black",
              fontWeight: 700,
            }}>
              {isRegistering ? "Signing Up..." : "Sign Up"}
              </Button>
            <Typography variant="body1">
              Already have an account? 
              <Link
                to={"/login"}                
              >
                Continue
              </Link>
              </Typography>
          </form>

      </main>
    </Box>
  );
};

export default Register;
