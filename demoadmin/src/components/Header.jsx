import React from 'react'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white border-bottom px-3'>
      <a className='navbar-brand fw-bold' href='/'>
        Admin Panel
      </a>

      <button
        className='navbar-toggler'
        type='button'
        data-bs-toggle='collapse'
        data-bs-target='#navbarContent'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarContent'>
        <ul className='navbar-nav ms-auto align-items-center'>
          <li className='nav-item me-3'>
            <a className='nav-link position-relative' href='/'>
              <i className='bi bi-bell fs-5'></i>

              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
                3
              </span>
            </a>
          </li>

          <li className='nav-item dropdown'>
            <a
              className='nav-link dropdown-toggle d-flex align-items-center'
              href='/'
              role='button'
              data-bs-toggle='dropdown'
            >
              <img
                src='https://via.placeholder.com/30'
                alt='user'
                className='rounded-circle me-2'
              />
              Admin
            </a>

            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <a className='dropdown-item' href='/profile'>
                  Profile
                </a>
              </li>

              <li>
                <a className='dropdown-item' href='/settings'>
                  Settings
                </a>
              </li>

              <li>
                <hr className='dropdown-divider' />
              </li>

              <li>
                <a className='dropdown-item text-danger' href='/logout'>
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
