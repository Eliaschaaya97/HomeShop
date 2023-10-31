import './style1.css';
import{useState} from 'react';
function AccountPage(){
  const[name,setName]=useState('');
  const[mobile,setMobile]=useState('');

  const[email,setEmail]=useState('');

  return (

    <>
    <div className="container1">
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
      <label htmlFor="mobile">Mobile:</label>
      <input type="text"  name="mobile" id="mobile"  value={mobile} onChange={(e)=>setMobile(e.target.value)}/>
      <label htmlFor="email">Email:</label>
      <input type="text" name="email" id="email"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="button" name="send" id="send" value="Send" />
      
    </div>
    </>
  );
}
export default AccountPage;