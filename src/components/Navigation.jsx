import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiPlusCircle, FiFolder, FiLogOut} from 'react-icons/fi';
import PropTypes from 'prop-types';
 
function Navigation({ logout, name }) {
        return (
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className='container'>
                                <Link to="/" className="navbar-brand"><h2>Aplikasi Catatan {name}</h2></Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                                <li className="nav-item active">
                                                        <Link to="/" className="nav-link"><FiHome /></Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link to="/add" className="nav-link"><FiPlusCircle /></Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link to="/arsip" className="nav-link"><FiFolder /></Link>
                                                </li>
                                                <li className="nav-item">
                                                        <span className="nav-link" onClick={logout}>{name} <FiLogOut /></span>
                                                </li>
                                        </ul>
                                </div>
                        </div>
                </nav>
        );
}

Navigation.propTypes = {
        logout: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
};
      
export default Navigation;