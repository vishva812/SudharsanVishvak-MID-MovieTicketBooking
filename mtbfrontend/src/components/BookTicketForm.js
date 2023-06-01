import React, { useState } from 'react'
import ShowsLCompo from './ShowsLCompo'
import Axios from 'axios';
import Navbar from './Navbar';

function BookTicketForm() {
  const url = "http://localhost:9999/movies/bookticket"
  const [data, setData] = useState({
    showId:"",
    paymentmethod:"",
    seatNo:"",
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
        
        showId:parseInt(data.showId),
        paymentmethod:data.paymentmethod,
        seatNo:parseInt(data.seatNo),
        customerId:parseInt(data.customerId)
    })
    .then(res=>{
        console.log(res.data)
    })
  }

  return (
    <div>
      <Navbar />
      <div className='row'>
        <div className='col p-5 my-5 mx-5 bg-dark text-white' style={{ width: "30%", display: 'flex', justifyContent: 'space-between' }}>
          <form onSubmit={(e) => submit(e)}>
            <table align="center">
              <tr>
                <td colSpan="2"><h2>Book Ticket</h2></td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>showId:</td>
                <td style={{ paddingBottom: "20px" }}><input onChange={(e) => handle(e)} id='showId' value={data.showId} type="text" name="fullname" placeholder='Check Show Table' /></td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>paymentmethod:</td>
                <td style={{ paddingBottom: "20px" }}>
                  {/* <input onChange={(e) => handle(e)} id='paymentmethod' value={data.paymentmethod} type="text" name="fullname"  /> */}
                  <select className="form-select" onChange={(e) => handle(e)} id='paymentmethod' value={data.paymentmethod} name="username">
                    <option value="CC">CC</option>
                    <option value="UPI">UPI</option>
                    <option value="DD">DD</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>seatNo:</td>
                <td style={{ paddingBottom: "20px" }}><input onChange={(e) => handle(e)} id='seatNo' value={data.seatNo} type="text" name="username" /></td>
              </tr>
              <tr>
                <td style={{ paddingBottom: "20px" }}>customerId:</td>
                <td style={{ paddingBottom: "20px" }}><input onChange={(e) => handle(e)} id='customerId' value={data.customerId} type="text" placeholder='Number' /></td>
              </tr>
              <tr>
                <td colSpan="2" style={{ paddingBottom: "20px" }}>
                  <button className='btn btn-outline-success' type="submit" value="Book Ticket" onClick={() => {
                    alert("Ticket booked successfully!");
                    window.location.reload();
                  }}>Book Ticket</button>
                </td>
              </tr>
            </table>
          </form>
        </div>

        <div className='col p-5 my-20 mx-5' style={{ paddingBottom: "100%" }}>
          <ShowsLCompo />
        </div>
      </div>
    </div>
   
        
    
   

  )
}

export default BookTicketForm