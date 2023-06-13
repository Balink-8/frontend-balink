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
        const response = await axios.post("http://167.172.66.247:8002/login", {
          email,
          password,
        });

        console.log(response);
        const token = response.data.data.token;
        const userRole = response.data.data.user.role;

        if (userRole === "admin") {
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          navigate("/dashboard");
        } else {
          console.log("User is not an admin. Access denied to the dashboard.");
          setErrorMessage(
            "Access denied. You are not authorized to access the dashboard."
          );
          setEmailError(true);
          setPasswordError(true);
        }
      } catch (error) {
        // Handle login error here
        setErrorMessage("Login failed. Please check your email and password.");
        setEmailError(true);
        setPasswordError(true);
      }
    }
  };

  return (
    <div className="wrapper">
      <div className={styles.backgroundImage}>
        <img src={Gambar} className={styles.gambar} alt="Background" />
      </div>
      <form className={styles.form}>
        <div className={styles.logo} id="logo">
          <img src={Logo} className={styles.imageLogo} alt="Logo" />
          <p className="body-large-regular mt-2 text-center">
            Nikmati kegiatan dan wisata anda dengan{" "}
            <span className="body-large-semibold">Balink</span>. Aman, Nyaman
            dan Mudah untuk kita bersama.
          </p>
          {errorMessage && <p className={styles.errorText}>{errorMessage}</p>}
        </div>
        <div className="input-patern" id="input-patern">
          <div className="username">
            <label className="body-large-semibold label">Email</label>
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
          <label className="body-large-semibold label">Password</label>
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
            />
          </div>
          <div className={styles.button}>
            <button
              type="button"
              className={styles.btnLogin}
              onClick={() => onSubmit()}
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
