import React from 'react';
import PropTypes from 'prop-types';

const NavBar = ({ title }) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{title}</a>
            </div>
        </nav>
     );
}

NavBar.propTypes = {
    title: PropTypes.string.isRequired
}
 
export default NavBar;