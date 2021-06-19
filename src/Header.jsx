import React from 'react'
import uuid from 'react-uuid';
 const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
     <img src="https://www.codingninjas.com/assets-landing/images/CNLOGO.svg" alt="ss" width="200" height="24"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul key={uuid()} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li key={uuid()} className="nav-item">
          <span className="nav-link active" aria-current="page" >Home</span>
        </li>

        <li key={uuid()} className="nav-item">
          <span className="nav-link active" aria-current="page" >Courses</span>
        </li>


        <li key={uuid()} className="nav-item">
          <span className="nav-link active" >Practice</span>
        </li>

        <li key={uuid()} className="nav-item">
          <span className="nav-link active" >Events</span>
        </li>

        <li key={uuid()} className="nav-item">
          <span className="nav-link active" >Campus Ninjas</span>
        </li>

        <li key={uuid()} className="nav-item">
          <span className="nav-link active" >Blog</span>
        </li>
        <li key={uuid()} className="nav-item">
          <span className="nav-link active" ><b>(Note this nav bar is not working)</b></span>
        </li>

       
        
      </ul>
           </div>
  </div>
</nav>



        </div>
    )
}

export default Header;