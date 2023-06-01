import React, { useState } from 'react'
import MovieLCompo from './MovieLCompo'
import Axios from 'axios';
import Navbar from './Navbar';

function ReviewForm() {
     
        const url = "http://localhost:9999/movies/ratemovie"
        const [data, setData] = useState({
            movieId:"",
            rating:"",
            review:"",
          customerId:""
        })
        function handle(e){
          const newdata={...data}
          newdata[e.target.id] = e.target.value
          setData(newdata)
          console.log(newdata)
      
        }
        function submit(e){
          e.preventDefault();
          Axios.post(url,{
              
            movieId:parseInt(data.movieId),
            rating:parseInt(data.rating),
            review:data.review,
            customerId:parseInt(data.customerId)
          })
          .then(res=>{
              console.log(res.data)
          })
        }
  return (
    <div>
    <Navbar/>
    <div className='row'>
        <span className='col p-5 my-5 mx-5 bg-dark text-white  ' style={{width:"30%", display: 'flex', justifyContent: 'space-between'}}>
        <form onSubmit={(e)=> submit(e)} >
        <table align="center">
        <tr>
          <td colSpan="2"><h2>Write Your Review </h2></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px"}}>MovieID:</td>
          <td style={{paddingBottom: "20px"}}><input onChange={(e) => handle(e)} id='movieId' value={data.movieId} type="text" name="fullname" placeholder='Check movie Table'/></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px"}}>Rating:</td>
          <td style={{paddingBottom: "20px"}}><input onChange={(e) => handle(e)} id='rating' value={data.rating} type="text"/></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px"}}>Review:</td>
          <td style={{paddingBottom: "20px"}}><textarea onChange={(e) => handle(e)} id='review' value={data.review} class="form-control"  rows="3"></textarea></td>
        </tr>
        <tr>
          <td style={{paddingBottom: "20px"}}>customerId:</td>
          <td style={{paddingBottom: "20px"}}><input onChange={(e) => handle(e)} id='customerId' value={data.customerId} type="text" placeholder='Your Id' /></td>
        </tr>
       
        <tr>
        <td colSpan="2" style={{paddingBottom: "20px"}}><button className='btn btn-outline-success' type="submit" value="Book Ticket" onClick={() => {
    alert("Your Review Added successfully! ");
    window.location.reload();
  }}>Add Your Review</button></td>
        </tr>
      </table>
      </form>
    </span>
    <span className=' col p-5 my-20 mx-5' style={{paddingBottom:"100%"}}> <MovieLCompo/></span>
    </div>
    </div>
  )
}

export default ReviewForm