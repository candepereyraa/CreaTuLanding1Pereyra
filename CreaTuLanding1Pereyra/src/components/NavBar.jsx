import CartWidget from './CartWidget'
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom  fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Fenty Beauty</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             <Link to="/" className='links'>Home</Link>
            </li>
            <li className="nav-item">
                <Link className='links' to="/category/electronics">Electrónica</Link>
            </li>
            <li className="nav-item">
              <Link className='links' to="/category/jewelery">Bijouterie</Link>
            </li>
            <li className="nav-item">
              <Link className="links" to="/category/women's clothing">Ropa de mujer</Link>
            </li>
            <li className="nav-item">
              <Link className="links" to="/category/men's clothing">Ropa de hombre</Link>
            </li>
          </ul>

          {/* Acá el CartWidget alineado a la derecha */}
          <div className="d-flex">
            <CartWidget />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar

