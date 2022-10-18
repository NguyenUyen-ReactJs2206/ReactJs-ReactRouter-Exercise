import React from "react";
import "./Header.css";
export default function Header() {
  return (
    <div>
      <div className="container-fluid px-4 text-center bg-light header">
        <div className="row gx-5">
          <div className="col-md-4">
            <div className="p-3 header-name-brand">
              <h4>conduit</h4>
            </div>
          </div>
          <div className="col-md-8">
            <nav class="navbar navbar-expand-lg bg-light">
              <div class="container-fluid">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      Sign in
                    </a>
                  </li>
                  <li class="nav-item"> 
                    <a class="nav-link">Sign up</a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <div className="container-fluid banner">
        <div className="row">
        <div className="banner-name"><h3>conduit</h3></div>
        <div className="banner-slogan"><p>A place to share your knowledge</p></div>
        </div>
      </div>
    </div>
  );
}
