import React from 'react'
import uuid from 'react-uuid';
 const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid" >
    <span className="navbar-brand" >Navbar</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul key={uuid()} className="navbar-nav me-auto mb-2 mb-lg-0">
        <li key={uuid()} className="nav-item">
          <span className="nav-link active" aria-current="page" >Home</span>
        </li>
        <li key={uuid()} className="nav-item">
          <span className="nav-link active" >Link</span>
        </li>
        <li key={uuid()} className="nav-item dropdown">
          <span className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </span>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li key={uuid()}><span className="dropdown-item">Another action</span></li>
            <li key={uuid()}><span className="dropdown-item">Action</span></li>
            <li key={uuid()}><hr className="dropdown-divider"/></li>
            <li key={uuid()}><span className="dropdown-item" >Something else here</span></li>
          </ul>
        </li>
        
      </ul>
           </div>
  </div>
</nav>



        </div>
    )
}

export default Header;