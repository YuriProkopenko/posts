import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import TextInput from "../../../UI/TextInput";
import Button from "../../../UI/Button";
import Separator from "../../../UI/Separator";
import ValidMessage from "./ValidMessage";
import user from "../../../user-data";

import styles from "./Register.module.css";

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

const getConfirmPassValidation = (password, confirmPass) => {
  if (confirmPass === password || password.length < 6)
    return { valid: true, errorMessage: "" };
  else
    return {
      valid: false,
      errorMessage: "please confirm your password correct!",
    };
};

const Register = () => {
  const [registerInputs, setRegisterInputs] = useState({
    email: "",
    password: "",
    confirmPass: "",
  });

  const [emailValidation, setEmailValidation] = useState({
    valid: true,
    errorMessage: "email format is not correct!",
  });
  const [passwordValidation, setPasswordValidation] = useState({
    valid: true,
    errorMessage: "password must have 6 or more symbols!",
  });
  const [confirmPassValidation, setConfirmPassValidation] = useState({
    valid: true,
    errorMessage: "please confirm your password correct!",
  });

  const [isRegistered, setIsRegistered] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    setEmailValidation(getEmailValidation(registerInputs.email));
    setPasswordValidation(getPasswordValidation(registerInputs.password));
    setConfirmPassValidation(
      getConfirmPassValidation(
        registerInputs.password,
        registerInputs.confirmPass
      )
    );
  };

  useEffect(() => {
    if (
      emailValidation.valid &&
      !emailValidation.errorMessage &&
      passwordValidation.valid &&
      !passwordValidation.errorMessage &&
      confirmPassValidation.valid &&
      !confirmPassValidation.errorMessage
    ) {
      user.email = registerInputs.email;
      user.password = registerInputs.password;
      setIsRegistered(true);
    }
  }, [emailValidation, passwordValidation, confirmPassValidation]);

  if (isRegistered) {
    return <Navigate to="/" />;
  }

  return (
    <div className={styles["wrapper"]}>
      <p className={styles["title"]}>Register</p>
      <form className={styles["form"]}>
        <div className={styles["email-input"]}>
          <TextInput
            placeholder="email..."
            value={registerInputs.email}
            onChange={(e) => {
              e.nativeEvent.data !== " " &&
                setRegisterInputs({ ...registerInputs, email: e.target.value });
            }}
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
            value={registerInputs.password}
            onChange={(e) => {
              e.nativeEvent.data !== " " &&
                setRegisterInputs({
                  ...registerInputs,
                  password: e.target.value,
                });
            }}
          />
          {!passwordValidation.valid && (
            <ValidMessage
              text={passwordValidation.errorMessage}
              isActive={!passwordValidation.valid}
            />
          )}
        </div>
        <div className={styles["confirmPass-input"]}>
          <TextInput
            type="password"
            placeholder="confirm password..."
            value={registerInputs.confirmPass}
            onChange={(e) => {
              e.nativeEvent.data !== " " &&
                setRegisterInputs({
                  ...registerInputs,
                  confirmPass: e.target.value,
                });
            }}
          />
          {!confirmPassValidation.valid && (
            <ValidMessage
              text={confirmPassValidation.errorMessage}
              isActive={!confirmPassValidation.valid}
            />
          )}
        </div>
        <div className={styles["register-btn"]}>
          <Button onClick={handleRegister}>Register</Button>
        </div>
        <Separator text="Already have account?" />
        <Link className={styles["login-btn"]} to="/login">
          Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
