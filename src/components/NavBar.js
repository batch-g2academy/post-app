import React from 'react'

export default function NavBar({ setMenu }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="nav-link" onClick={() => setMenu('home')}>Home</div>
                </li>
                <li className="nav-item">
                <div className="nav-link" onClick={() => setMenu('posts')}>Posts</div>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
