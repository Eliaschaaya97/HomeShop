
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './style1.css';
import { Container } from 'react-bootstrap';

const Login = () => {
  let history = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const sendData = {
      email: data.email,
      password: data.password,
    };

    console.log(sendData);

    // Replace the URL with your login endpoint
    axios.post('https://eliaschaaya97.github.io/phpreact/', sendData,{ withCredentials: true })
      .then((result) => {
        if (result.data.Status === 'invalid') {
          alert('Invalid login credentials');
        } else {
          // Redirect to the dashboard or another page after successful login
          history('/home');
        }
      });
  };

  return (
    <div>
    {/* Additional content */}
    <Container className="home-content text-center">
      <h1 className="home-title">Welcome to UNI Shop </h1>
      <p className="home-description">
        Explore our cutting-edge technology products and start shopping today!
      </p>
    </Container>

  
    <div className="container1">
      <form onSubmit={submitForm} className="container1">
      <label>Email For University:</label>
      <input type="text" name="email"   onChange={handleChange} value={data.email}/>
        
        <label>Password:</label>
        <input type="password" name="password" onChange={handleChange} value={data.password} />
        
        <input type="submit" name="send" id="send" value="login" />

        {/* Link to the registration page */}
        <p>
          Don't have an account?{" "}
          <Link to="/Account">Create Account</Link>
        </p>
      </form>
    </div>
    </div>
  );
}

export default Login;
