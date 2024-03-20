import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import user from "../../../user-data";
import TextInput from "../../../UI/TextInput";
import Button from "../../../UI/Button";
import Separator from "../../../UI/Separator";
import ValidMessage from "./ValidMessage";

import styles from "./Login.module.css";

const getEmailValidation = (email) => {
  if (/^(.+)@(.+)\.(.+)$/.test(email)) return { valid: true, errorMessage: "" };
  else return { valid: false, errorMessage: "email format is not correct!" };
};

const getPasswordValidation = (password) => {
  if (password.length >= 6) return { valid: true, errorMessage: "" };
  else
    return {
      valid: false,
      errorMessage: "password must have 6 or more symbols!",
    };
};

const Login = () => {
  const [loginInputs, setLoginInputs] = useState({ email: "", password: "" });

  const [emailValidation, setEmailValidation] = useState({
    valid: true,
    errorMessage: "email format is not correct!",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    valid: true,
    errorMessage: "password must have 6 or more symbols!",
  });
  const { logIn } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    setEmailValidation(getEmailValidation(loginInputs.email));
    setPasswordValidation(getPasswordValidation(loginInputs.password));
  };

  useEffect(() => {
    if (
      emailValidation.valid &&
      !emailValidation.errorMessage &&
      passwordValidation.valid &&
      !passwordValidation.errorMessage
    )
      if (
        user.email === loginInputs.email &&
        user.password === loginInputs.password
      ) {
        logIn(
          { email: loginInputs.email, password: loginInputs.password },
          () => navigate(fromPage, { replace: true })
        );
      }
  }, [emailValidation, passwordValidation]);

  return (
    <div className={styles["wrapper"]}>
      <p className={styles["title"]}>Login</p>
      <form className={styles["form"]}>
        <div className={styles["email-input"]}>
          <TextInput
            placeholder="email..."
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, email: e.target.value })
            }
          />
          {!emailValidation.valid && (
            <ValidMessage
              text={emailValidation.errorMessage}
              isActive={!emailValidation.valid}
            />
          )}
        </div>
        <div className={styles["password-input"]}>
          <TextInput
            type="password"
            placeholder="password..."
            onChange={(e) =>
              setLoginInputs({ ...loginInputs, password: e.target.value })
            }
          />
          {!passwordValidation.valid && (
            <ValidMessage
              text={passwordValidation.errorMessage}
              isActive={!passwordValidation.valid}
            />
          )}
        </div>
        <div className={styles["login-btn"]}>
          <Button onClick={handleLogin}>Login</Button>
        </div>
        <Separator text="Don't have account?" />
        <Link className={styles["register-btn"]} to="/register">
          Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
