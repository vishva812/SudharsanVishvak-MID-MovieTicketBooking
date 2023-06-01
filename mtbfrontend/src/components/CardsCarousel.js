import React from 'react'

import kgf from "../kgf.jpg"
import sulthan from "../sulthan.jpg"
import beast from "../beast.jpg"
import blc from "../blackcolover.jpg"
import aot from "../aot.jpg"
import hells from "../hellsparasa.jpg"
import onep from "../onepeice.jpg"
import juju from "../jujutsu.jpg"
import trans from "../transformers.jpg"
import Navbar from './Navbar'

function CardsCarousel() 
{
  return (
    <div>
    <Navbar/>
    
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner" style={{padding: "1em"}}>
    <div className="carousel-item active">
      <div className="cards-wrapper" style={{display: "flex" , justifyContent:"center",padding: "20px",paddingLeft: "30px",paddingRight:"30px"}}>

      <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"20%" ,width:"30%"}}>
        <img src={onep} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://www.youtube.com/watch?v=92dvn8cfd4s" className="btn btn-outline-success">Watch Trailer</a>
        </div>
      </div>

      <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
        <img src={aot} className="card-img-top" alt="..." style={{maxWidth: "50%",  maxHeight:"100%",paddingTop: "10px", "@media (min-width: 768px)": {
      height: "18em",
    }}}></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://www.youtube.com/watch?v=ZefrVAetxVI" className="btn btn-outline-success">Watch Trailer</a>
        </div>
      </div>

      <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
        <img src={kgf} className="card-img-top" alt="..." style={{maxWidth: "50%",  maxHeight:"100%",paddingTop: "10px", "@media (min-width: 768px)": {
      height: "18em",
    }}}></img>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="https://www.youtube.com/watch?v=tLeTx5OdjZs" className="btn btn-outline-success">Watch Trailer</a>
        </div>
      </div>
    </div>
    </div>

    <div className="carousel-item">
      <div className="cards-wrapper" style={{display: "flex" , justifyContent:"center",padding: "20px",paddingLeft: "30px",paddingRight:"30px"}}>
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={trans} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=itnqEauWQZM" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div> 
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={beast} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=0E1kVRRi6lk" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div>
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={blc} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=PrgxJ1_sUcs" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div>
      </div> 
    </div>
    <div className="carousel-item">
      <div className="cards-wrapper" style={{display: "flex" , justifyContent:"center",padding: "20px",paddingLeft: "30px",paddingRight:"30px"}}>
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={hells} className="card-img-top" alt="..."style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=kFQ2Ap8g4aw" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div>
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={sulthan} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=EWp7eDbJSCA" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div>
        <div className="card d-none d-md-block" style={{ margin: "0 0.5em",boxShadow: "2px 6px 8px 0 rgba(22, 22, 26, 0.18)",border: "none",borderRadius:"0",backgroundColor: "#212529",height:"30%" ,width:"30%"}}>
          <img src={juju} className="card-img-top" alt="..." style={{ height: "303px", width: "250px", paddingTop: "10px" }}></img>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="https://www.youtube.com/watch?v=muSr2NVs1oM" className="btn btn-outline-success">Watch Trailer</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{ backgroundColor: "#e1e1e1",width: "5vh",height: "5vh",borderRadius: "50%",top: "43%", transform: "translateY(-50%)"}}>
    <span className="carousel-control-prev-icon"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{ backgroundColor: "#e1e1e1",width: "5vh",height: "5vh",borderRadius: "50%",top: "43%", transform: "translateY(-50%)"}}>
    <span className="carousel-control-next-icon"></span>
  </button>
<br></br>
<marquee className="container" behavior="scroll" direction="left" style={{background:"#212529"}}> <h1 >WELCOME TO MTB</h1> </marquee>
</div>
</div>
  )
}

export default CardsCarousel
