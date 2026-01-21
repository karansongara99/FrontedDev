import React from "react";

const Sidebar = () => {
  return (
    <div
      className="d-flex flex-column p-3 border-end"
      style={{ width: "250px", minHeight: "100vh" }}
    >
      <h5 className="fw-bold mb-4">Menu</h5>

      <ul className="nav nav-pills flex-column gap-1">

        <li className="nav-item">
          <a href="/" className="nav-link text-dark">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a href="/user" className="nav-link text-dark">
            <i className="bi bi-people me-2"></i>
            Users
          </a>
        </li>

        <li className="nav-item">
          <a href="/faculty" className="nav-link text-dark">
            <i className="bi bi-person-badge me-2"></i>
            Faculty
          </a>
        </li>

        <li className="nav-item">
          <a
            className="nav-link text-dark d-flex justify-content-between align-items-center"
            data-bs-toggle="collapse"
            href="#settingsMenu"
            role="button"
          >
            <span>
              <i className="bi bi-gear me-2"></i>
              Settings
            </span>
            <i className="bi bi-chevron-down"></i>
          </a>

          <div className="collapse ps-3" id="settingsMenu">
            <ul className="nav flex-column">
              <li className="nav-item">
                <a href="/profile" className="nav-link text-dark">
                  Profile
                </a>
              </li>
              <li className="nav-item">
                <a href="/security" className="nav-link text-dark">
                  Security
                </a>
              </li>
              <li className="nav-item">
                <a href="/logout" className="nav-link text-danger">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default Sidebar;
