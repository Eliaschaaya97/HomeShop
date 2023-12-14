// Loginpage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style1.css";// ... (your existing imports)

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMsg("");
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [msg]);

  const handleInputChange = (e, type) => {
    setError("");
    const value = e.target.value;

    switch (type) {
      case "email":
        setEmail(value);
        if (value === "") {
          setError("Email cannot be blank");
        }
        break;
      case "password":
        setPassword(value);
        if (value === "") {
          setError("Password cannot be blank");
        }
        break;
      default:
    }
  };

  const loginSubmit = () => {
    if (email !== "" && password !== "") {
      const url = "https://unishopphp.000webhostapp.com/login.php";
      const headers = {
        Accept: "application/json",
        "Content-type": "application/json",
      };

      const data = {
        email: email,
        password: password,
      };

      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response[0].result === "Invalid username or password!") {
            setError(response[0].result);
          } else {
            setMsg(response[0].result);
            setTimeout(() => {
              navigate("/home"); // Redirect to /home on successful login
            }, 5000);
          }
        })
        .catch((error) => {
          setError("An error occurred. Please try again.");
          console.error("Fetch error:", error);
        });
    } else {
      setError("All fields are required!");
    }
  };

  return (
    <>
      <h1 id="h1">Welcome to UNI Shop</h1>
      <div className="container1">
        <p>
          {error !== "" ? (
            <span className="error">{error}</span>
          ) : (
            <span className="success">{msg}</span>
          )}
        </p>
        <label>Email For University :</label>
        <input
          type="text"
          value={email}
          placeholder="id@students.UniName.edu.lb"
          onChange={(e) => handleInputChange(e, "email")}
          className="email-input"
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          placeholder="******"
       
          onChange={(e) => handleInputChange(e, "password")}
          className="password-input"
        />
        <input
          type="submit"
          value="Login"
          className="submit-button"
          onClick={loginSubmit}
        />
        <span className="create-account-link">
          <button onClick={() => navigate("/account")}>Create Account</button>
        </span>
      </div>
    </>
  );
};

export default LoginPage;
