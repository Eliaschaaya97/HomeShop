import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  let history = useNavigate();
  const [data, setData] = useState({
    name: "",
    lname: "",
    Uni: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
  });

  useEffect(() => {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
      });
    });
  }, []);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const sendData = {
      name: data.name,
      lname: data.lname,
      Uni: data.Uni,
      mobile: data.mobile,
      email: data.email,
      address1: data.address1,
      address2: data.address2,
    };

    console.log(sendData);

    axios.post('http://localhost:8080/php-react/insert.php', sendData)
      .then((result) => {
        if (result.data.Status === 'invalid') {
          alert('Invalid user');
        } else {
          history('/home');
        }
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      const auth2 = await window.gapi.auth2.getAuthInstance();
      const user = await auth2.signIn();
      // Access user information from the 'user' object
      console.log(user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <div className="container1">
      <form onSubmit={submitForm} className="container1">
        {/* ... Your existing form fields ... */}

        <input type="submit" name="send" id="send" value="Send" />
      </form>

      {/* Google Sign-In Button */}
      <div>
        <button onClick={handleGoogleSignIn}>Sign in with Google</button>
      </div>
    </div>
  );
};

export default Register;
