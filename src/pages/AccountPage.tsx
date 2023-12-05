import "./style1.css";
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

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = (e: { preventDefault: () => void }) => {
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
      alert("Please fill in all fields");
      return; // Stop the form submission if any field is empty
    }
  
    const sendData = {
      name: data.name,
      lname: data.lname,
      password: data.password,
      mobile: data.mobile,
      email: data.email,
      uni: data.uni,
      address: data.address,
    };
    console.log(sendData);
    axios
      .post("http://localhost:8080/php-react/insert.php", sendData)
      .then((result: { data: { Status: string } }) => {
        if (result.data.Status == "invalid") {
          alert("invalid user");
        } else {
          history("/home");
        }
      });
  };

  return (
    <div className="container1">
      <form onSubmit={submitForm} className="container1">
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
        <label>password</label>
        <input
          type="text"
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
        <label>Univeristy Name :</label>

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

        <input type="submit" name="send" id="send" value="create acount" />
      </form>
    </div>
  );
};
export default Register;
