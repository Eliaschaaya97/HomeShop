import './style1.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    lname: "",
    Uni: "",
    mobile: "",
    email: "",
    address1: "",
    address2: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e: { preventDefault: () => void; }) => {
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

    axios.post('http://localhost:8080/php-react/insert.php', sendData)
      .then((result) => {
        if (result.data.Status === 'invalid') {
          alert('Invalid user');
        } else {
          history('/home');
        }
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
      });
  };

  return (
    <div className="container1">
      <form onSubmit={submitForm} className="container1">
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} value={data.name} />

        <label>Last Name:</label>
        <input type="text" name="lname" onChange={handleChange} value={data.lname} />

        <label>University Name:</label>
        <input type="text" name="Uni" onChange={handleChange} value={data.Uni} />

        <label>Mobile:</label>
        <input type="text" name="mobile" onChange={handleChange} value={data.mobile} />

        <label>Email For University:</label>
        <input type="text" name="email" onChange={handleChange} value={data.email} />

        <label>Address 1:</label>
        <input type="text" name="address1" onChange={handleChange} value={data.address1} />

        <label>Address 2:</label>
        <input type="text" name="address2" onChange={handleChange} value={data.address2} />

        <input type="submit" name="send" id="send" value="Send" />
      </form>
    </div>
  );
};

export default Register;
