import React from 'react';
import PropTypes from 'prop-types';

function ActivityDetail({ title, createdAt, body }) {
        return (
                <React.Fragment>
                        <article >
                                <h5>{title}</h5>
                                <p>{createdAt}</p>
                                <p>{body}</p>
                        </article>
                </React.Fragment>
                
        );     
}

ActivityDetail.propTypes = {
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
}
export default ActivityDetail;