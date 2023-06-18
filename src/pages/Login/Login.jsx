import styles from "./Login.module.css";
import Logo from "../../assets/images/Balink 1.png";
import Gambar from "../../assets/images/loginBg.png";
import InputLogin from "../../elements/InputLogin/InputLogin";
import IconVisibility from "../../assets/icons/visibility_off.svg";
import IconVisibilityOpen from "../../assets/images/eyes3.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [icon, setIcon] = useState(IconVisibility);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError(event.target.value.trim() === "");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError(event.target.value.trim() === "");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
    if (icon === IconVisibility) {
      setIcon(IconVisibilityOpen);
    } else {
      setIcon(IconVisibility);
    }
  };

  const onSubmit = async () => {
    if (email.trim() === "") {
      setEmailError(true);
    }
    if (password.trim() === "") {
      setPasswordError(true);
    }

    if (email.trim() !== "" && password.trim() !== "") {
      try {
        const response = await axios.post(
          "http://167.172.66.247:8002/admin_login",
          {
            email,
            password,
          }
        );

        const token = response.data.data.token;
        if (token) {
          localStorage.setItem("token", token);
          navigate("/dashboard");
        }
      } catch (error) {
        setErrorMessage("Login failed. Please check your email and password.");
        setEmailError(true);
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="wrapper" id="login-wrapper">
      <div className={styles.backgroundImage}>
        <img
          src={Gambar}
          className={styles.gambar}
          alt="Background"
          id="background-image"
        />
      </div>
      <form className={styles.form} id="login-form">
        <div className={styles.logo} id="logo">
          <img
            src={Logo}
            className={styles.imageLogo}
            alt="Logo"
            id="logo-image"
          />
          <p className="body-large-regular mt-2 text-center">
            Nikmati kegiatan dan wisata anda dengan{" "}
            <span className="body-large-semibold">Balink</span>. Aman, Nyaman
            dan Mudah untuk kita bersama.
          </p>

          {errorMessage && (
            <p className={styles.errorText} id="error-text">
              {errorMessage}
            </p>
          )}
        </div>
        <div className="input-patern" id="input-patern">
          <div className="username">
            <label className="body-large-semibold label" htmlFor="username">
              Email
            </label>
            <InputLogin
              type="text"
              className={`${styles.input} ${emailError ? styles.error : ""}`}
              placeholder="Enter your email"
              id="email"
              name="email"
              onChange={handleEmailChange}
              value={email}
            />
          </div>
          <label className="body-large-semibold label" htmlFor="password">
            Password
          </label>
          <div className={styles.password}>
            <InputLogin
              type={showPassword ? "text" : "password"}
              className={`${styles.input} ${passwordError ? styles.error : ""}`}
              placeholder="Enter your password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <img
              src={icon}
              className={styles.iconvisibility}
              onClick={toggleShowPassword}
              alt="Toggle Password Visibility"
              id="toggle-password-visibility"
            />
          </div>
          <div className={styles.button}>
            <button
              type="button"
              className={styles.btnLogin}
              onClick={onSubmit}
              id="login-button"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
