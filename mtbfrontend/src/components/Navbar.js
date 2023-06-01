// Navbar.js


import { Link } from 'react-router-dom';
import mtb from '../mtblogo.jpeg';

function Navbar() {


  return (
    <div>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark' style={{ padding: '25px' }}>
        <div className='container-fluid'>
          <img src={mtb} alt='Avatar Logo' style={{ width: '60px', height: '60px' }} />
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#mynavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='mynavbar'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item' style={{ paddingLeft: '10px' }}>
                <Link className='nav-link' to='/CardsCarousel'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/BookTicketForm'>
                  Book Ticket
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/TheaterLCompo'>
                  Theaters List
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/ReviewForm'>
                  Review
                </Link>
              </li>
              
            </ul>
            <Link class="btn btn-outline-success d-flex" type="button" to="/">Logout</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
