import React from 'react';
import PropTypes from 'prop-types';
import { FaCheck } from 'react-icons/fa';
 
function DoneActivityButton({ id, onArsip }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-success" onClick={() => onArsip(id)}>
                        <FaCheck/>
                </button> 
        ) 
}

DoneActivityButton.propTypes = {
        id: PropTypes.string.isRequired,
        onArsip: PropTypes.func.isRequired,
}
 
export default DoneActivityButton;