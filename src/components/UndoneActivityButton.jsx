import React from 'react';
import PropTypes from 'prop-types';

 
function UndoneActivityButton({ id, onUndone }) {
        return (
                <button className="border-0 btn-transition btn btn-outline-success" onClick={() => onUndone(id)}>
                        <i className="fa fa-undo" aria-hidden="true"></i>
                </button> 
        ) 
}

UndoneActivityButton.propTypes = {
        id: PropTypes.string.isRequired,
        onUndone: PropTypes.func.isRequired,
}
 
export default UndoneActivityButton;