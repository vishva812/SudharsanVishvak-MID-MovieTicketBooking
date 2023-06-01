import React,{useState} from 'react'
import axios from "axios"
import {Link,useNavigate} from 'react-router-dom'
import mtb from './mtblogo.jpeg';


function Login() {

    const [values ,setValues] = useState({
        email:'',
        password:''
    });

    const navigate = useNavigate();

    function handleInput(event){
        setValues({
            ...values,
            [event.target.name]:event.target.value
        });
    }

    const handleSubmit = (event)=>{
        axios.get(`http://localhost:8087/registration/login/${values.email}`,values)
        .then((res)=>{

          if (res.data.email === values.email && res.data.password === values.password){
                    navigate("/CardsCarousel");
                }
          else{
                alert("No record found")
            }
        }).catch((error)=>console.log(error));
    };


  return (
    <div className='row'>
       <div className='col p-5 my-5 mx-5 '>
          <img src={mtb}  style={{width:"34%"}} alt=''/>
          <br/>
          <br></br>
          <h2> Login And Enjoy Your Favorite Movie With Your Favorite People </h2>
    </div>
    <div className='col p-5 my-5 mx-5'>
        <div className='  bg-dark text-white  ' style={{width:"100%" ,height: "100%"}}>
        {/* <form  > */}
        <table align="center">
        <tr>
          <td colSpan="2" style={{paddingTop:"15%", paddingBottom:"5%",paddingLeft:"10%"}}><h2>Login </h2></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px" }}>Email:</td>
          <td style={{paddingBottom: "20px"}}><input  id='email' type="email" name="email" onChange={handleInput}/></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px"}}>Password:</td>
          <td style={{paddingBottom: "20px"}}><input  id='password'  type="password" name="password" onChange={handleInput}/></td>
                            
        </tr>
        
        <tr>
          <td colSpan="2" style={{paddingBottom: "5px",position: "relative", left:"30%",  transform: "translateX(-50%)"}}><button className='btn btn-outline-success' type="submit" onClick={(e)=>handleSubmit(e)} >Login</button></td>
          <td colSpan="2" style={{paddingBottom: "5px",position: "relative", right:"10%", transform: "translateX(-50%)"}}><Link className='btn btn-outline-success' type="submit"  to='/signup'>Sign up</Link></td>
        </tr>
        
      </table>
      {/* </form> */}
    </div>
    </div>
   
    </div>

   
  
  )
}

export default Login