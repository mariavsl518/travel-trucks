import React from 'react'
import css from './Header.module.css'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../img/icons/Logo'

const Header = () => {
  return (
    <div className={css.header}>
      <Link to='/' className={css.headerTitle}>
        <Logo/>
      </Link>

          <div className={css.nalLinks}>
            <NavLink
              to="/"
            className={ ({ isActive }) =>
                isActive ? css.navLinkActive : css.navLink
            }
            >
            Home
          </NavLink>

          <NavLink
              to="/catalog"
              className={({ isActive }) =>
                isActive ? css.navLinkActive : css.navLink
            }
            >
            Catalog
        </NavLink>
          </div>

    </div>
  )
}

export default Header
