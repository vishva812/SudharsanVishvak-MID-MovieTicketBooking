
import React, { Component } from 'react'
import alltheaters from '../service.js/theaterlist' 
import Navbar from './Navbar'



export class TheaterLCompo extends Component {
    
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        alltheaters.getProduct().then(res=>{
            this.setState({products:res.data})
            console.log(this.state.products);
        })

    }



  render() {
    return (
        <div>
      <Navbar />
      
      <div className='container' style={{paddingTop:"5%"}} >
        <h1>Theaters List</h1>
        <table className='table table-striped table-bordered table-hover table-light'>
         <thead class="table-dark">
            <tr >

                <th>Theatre-Id</th>
                <th>Theatre-Name</th>
                <th>Location</th>
                <th>Seating-Capacity</th>
                <th>Ticket-Price</th>
                
                
    
            </tr>
         </thead>
         <tbody>
               {
                  this.state.products.map(
                    product=>
                    <tr key={product.theatreId}>
                        <th>{product.theatreId}</th>
                        <th>{product.theatreName}</th>
                        <th>{product.location}</th>
                        <th>{product.seatingCapacity}</th>
                        <th>{product.ticketPrice}</th>
                        
                    </tr>
                  )
               }
               

         </tbody>

        </table>
      </div>
      </div>
      
  
    )
  }
}

export default TheaterLCompo