import { Link } from "react-router-dom"


function Navbar(){

    return(
        <>
        
          <nav className="navbar  bg-primary " data-bs-theme="dark">
    <div className="container-fluid">
      <Link className="navbar-brand"to={'/'}>Auhtorize</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to={'/home'}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/register'}>Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to={'/login'}>Login</Link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
        </>
    )
}

export default Navbar