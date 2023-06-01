import React, { Component } from 'react'
import allmovies from '../service.js/movielist'



export class MovieLCompo extends Component {
    
    constructor(){
        super()
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        allmovies.getProduct().then(res=>{
            this.setState({products:res.data})
        })

    }



  render() {
    return (
     
      <div className='container' style={{paddingTop:"5%"}} >
        <h1>Movies List</h1>
        <table className='table table-striped table-bordered table-hover table-light'>
         <thead>
            <tr class="table-dark">

                <th>MovieID</th>
                <th>MovieTitle</th>
                <th>Genre</th>
                <th>Director</th>
                <th>Duration</th>
                <th>Rating</th>
                
    
            </tr>
         </thead>
         <tbody>
               {
                  this.state.products.map(
                    product=>
                    <tr key={product.movieId}>
                        <th>{product.movieId}</th>
                        <th>{product.movieTitle}</th>
                        <th>{product.genre}</th>
                        <th>{product.director}</th>
                        <th>{product.duration}</th>
                        <th>{product.rating}</th>

                    </tr>
                  )
               }
               

         </tbody>

        </table>
      </div>
  
    )
  }
}

export default MovieLCompo