

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid" style={{cursor: 'pointer'}}>
      <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-4">NewsMag</span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-link active" onClick={()=>{setCategory("business")}} aria-current="page">business</div>
          </li>
          <li className="nav-item">
            <div className="nav-link active"onClick={()=>{setCategory("entertainment")}} aria-current="page">entertainment</div>
          </li>
          <li className="nav-item">
            <div className="nav-link active" onClick={()=>{setCategory("general")}} aria-current="page">general</div>
          </li>
          <li className="nav-item">
            <div className="nav-link active"onClick={()=>{setCategory("technology")}} aria-current="page">technology</div>
          </li>
          <li className="nav-item">
            <div className="nav-link active"onClick={()=>{setCategory("science")}} aria-current="page">science</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default Navbar