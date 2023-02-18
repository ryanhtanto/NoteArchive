import React from 'react';
import PropTypes from 'prop-types';
 
function ActivityItemBody({ title, body, createdAt }) {
 return (
        <React.Fragment>  
                <h5 style={{fontWeight: 'bold'}}>{title}</h5>
                <p className='text-muted'>{createdAt}</p>
                <div className="card-body">
                        {body}
                </div>    
        </React.Fragment>
 );
}

ActivityItemBody.propTypes = {
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
}
 
export default ActivityItemBody;