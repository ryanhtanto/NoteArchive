import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
 
function DeleteActivity({ id, onDelete }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-danger" onClick={() => onDelete(id)}>
                        <FaTrash />
                </button> 
        ) 
}
DeleteActivity.propTypes = {
        id: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
}
export default DeleteActivity;