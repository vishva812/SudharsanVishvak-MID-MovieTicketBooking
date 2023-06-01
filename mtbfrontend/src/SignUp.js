
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
      });
      const navigate = useNavigate();
    
      function handleInput(event) {
        setValues({
          ...values,
          [event.target.name]: event.target.value
        });
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios
          .post('http://localhost:8087/registration/postdetails', values)
          .then((res) => {
            navigate('/');
          })
          .catch((err) => console.log(err));
      };

  return (
    <div style={{paddingLeft:"33%"}}><div className='container ' style={{paddingTop:"15%"}}>
    <span className=' p-5 my-5 mx-5 bg-dark text-white  ' style={{width:"40%", display: 'flex'}}>
    <form  >
    <table align="center">
    <tr>
      <td colSpan="2"><h2>SignUp</h2></td>
    </tr>
    <tr>
      <td style={{paddingBottom: "20px"}}>UserName:</td>
      <td style={{paddingBottom: "20px"}}><input  id='email' type="Text" name="UserName" onChange={handleInput}/></td>
    </tr>
    <tr>
      <td style={{paddingBottom: "20px"}}>Email:</td>
      <td style={{paddingBottom: "20px"}}><input  id='email' type="email" name="email" onChange={handleInput}/></td>
    </tr>
    <tr>
      <td style={{paddingBottom: "20px"}}>Password:</td>
      <td style={{paddingBottom: "20px"}}><input  id='password'  type="password" name="password" onChange={handleInput}/></td>
                        
    </tr> 
    <tr>

      <td colSpan="2" style={{paddingBottom: "20px",position: "relative", left:"30%",  transform: "translateX(-50%)"}}><button className='btn btn-outline-success' type="submit" value="Book Ticket"  onClick={(e)=>handleSubmit(e)} >Sign up</button></td>
      <td colSpan="2" style={{paddingBottom: "20px",position: "relative", right:"10%", transform: "translateX(-50%)"}}><Link className='btn btn-outline-success' type="submit"  value="Book Ticket" to="/">Login</Link></td>
    </tr>
    
  </table>
  </form>
</span>
</div></div>
  )
}

export default SignUp