import React, { Component } from 'react'
import allshows from '../service.js/showlist'



export class ShowsLCompo extends Component {
    
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        allshows.getProduct().then(res=>{
            this.setState({products:res.data})
            console.log(this.state.products);
        })

    }



  render() {
    return (
      
      <div className='container' style={{paddingTop:"5%"}} >
        <h1>Shows List</h1>
        <table className='table table-striped table-bordered table-hover table-light'>
         <thead>
            <tr class="table-dark">

                <th>ShowID</th>
                <th>MovieTitle</th>
                <th>Theatres</th>
                <th>ShowDate</th>
                <th>ShowTime</th>
                <th>AvailableSeats</th>
                
    
            </tr>
         </thead>
         <tbody>
               {
                  this.state.products.map(
                    product=>
                    <tr key={product.showId}>
                        <th>{product.showId}</th>
                        <th>{product.movie?.movieTitle}</th>
                        <th>{product.theatre?.theatreName}</th>
                        <th>{product.showDate}</th>
                        <th>{product.showTime}</th>
                        <th>{product.availableSeats}</th>

                    </tr>
                  )
               }
               

         </tbody>

        </table>
      </div>
  
    )
  }
}

export default ShowsLCompo