import React from 'react'
import './nav.css';
const Nav = ({ filterItem ,setSearch,picSearch,see}) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid color">
          <a className="navbar-brand navTitle" href="#" style={{ color: 'snow', fontWeight: 'bold' }}onClick={() => filterItem('All')}>SNApSHOT</a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" onClick={() => filterItem('All')}>All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => filterItem('flower')}>Flowers</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => filterItem('sea')}>Sea's</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => filterItem('mountain')}>Mountain</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => filterItem('home')}>HomeDesign</a>
              </li>
            </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" value={see} onChange={(get)=>setSearch(get.target.value)}/>
                <button className="btn btn-outline-danger" onClick={picSearch}>Search</button>
              </form>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Nav;
