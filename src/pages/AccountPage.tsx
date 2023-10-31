import './style1.css';
import{useState} from 'react';
import axios from 'axios';
function AccountPage(){
  const[name,setName]=useState('');
  const[mobile,setMobile]=useState('');
  const[email,setEmail]=useState('');

  const handleSubmit =() =>{
    if(name.length===0){
      alert("Name has left blank!");
    }
   else if(mobile.length===0){
      alert("Mobile has left blank!");
    }
    else if(email.length===0){
      alert("Email has left blank!");
    }
    else {
      const url ="hhtp://localhost/enquiry.php"
      let fData =new FormData();
      fData.append('name',name);
      fData.append('mobile',mobile);
      fData.append('email',email);

      axios.post(url,fData)
      .then(response=>alert(response.data))
      .catch(error=>alert(error));


    }

    
  }

  return (

    <>
    <div className="container1">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="mobile">Mobile:</label>
      <input type="text"  name="mobile" id="mobile"  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="button" name="send" id="send" value="Send" onClick={handleSubmit}/>
      
    </div>
    </>
  );
}
export default AccountPage;