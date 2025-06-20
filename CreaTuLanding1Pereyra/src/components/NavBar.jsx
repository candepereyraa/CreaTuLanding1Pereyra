import CartWidget from './CartWidget'

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
              <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Productos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
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

