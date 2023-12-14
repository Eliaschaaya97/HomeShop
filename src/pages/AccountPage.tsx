import "./style1.css";
import bcrypt from "bcryptjs";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  let history = useNavigate();

  const [data, setData] = useState({
    name: "",
    lname: "",
    password: "",
    mobile: "",
    email: "",
    uni: "",
    address: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.lname === "" ||
      data.password === "" ||
      data.mobile === "" ||
      data.email === "" ||
      data.uni === "" ||
      data.address === ""
    ) {
      setError("Please fill in all fields");
      return; // Stop the form submission if any field is empty
    }

    const hashedPassword = bcrypt.hashSync(data.password, 10);

    const sendData = {
      name: data.name,
      lname: data.lname,
      password: hashedPassword, // Send the hashed password
      mobile: data.mobile,
      email: data.email,
      uni: data.uni,
      address: data.address,
    };

    axios.post("https://unishopphp.000webhostapp.com/index.php", sendData)
    .then((result) => {
      if (result.data.Status === "invalid") {
        setError("Invalid user");
      } else {
        history("/home");
      }
    })
    .catch((error) => {
      console.error("Error in axios request:", error);
      // Add more specific error handling if needed
    });
  };

  return (
    <div className="container1">
      <form onSubmit={submitForm} className="container1">
        {error && <div className="error">{error}</div>}
        <label>Name :</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={data.name}
        />
        <label>Last Name :</label>
        <input
          type="text"
          name="lname"
          placeholder="LastName"
          onChange={handleChange}
          value={data.lname}
        />
        <label>Password</label>
        <input
          type="password" // Change input type to password
          name="password"
          placeholder="****"
          onChange={handleChange}
          value={data.password}
        />
        <label>Mobile :</label>
        <input
          type="text"
          name="mobile"
          placeholder="+96171717171"
          onChange={handleChange}
          value={data.mobile}
        />
        <label>Email For University :</label>
        <input
          type="text"
          name="email"
          placeholder="id@students.UniName.edu.lb"
          onChange={handleChange}
          value={data.email}
        />
        <label>University Name :</label>
        <input
          type="text"
          name="uni"
          placeholder="University Name"
          onChange={handleChange}
          value={data.uni}
        />
        <label>Address :</label>
        <input
          type="text"
          name="address"
          placeholder="Lebanon jal el dib"
          onChange={handleChange}
          value={data.address}
        />

        <input type="submit" name="send" id="send" value="create account" />
      </form>
    </div>
  );
};

export default Register;
