import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FiMoreHorizontal } from 'react-icons/fi';
 
function DetailActivity({ id }) {
        return (
                <Link to={`/notes/${id}`}>
                        <button className="border-0 btn-transition btn btn-outline-primary">
                                <FiMoreHorizontal />
                        </button> 
                </Link>
        ) 
}
DetailActivity.propTypes = {
        id: PropTypes.string.isRequired,
}
 
export default DetailActivity;