import React from 'react';
import ActivityItemBody from './ActivityItemBody';
import DeleteActivity from './DeleteActivity';
import DetailActivity from './DetailActivity';
import DoneActivityButton from './DoneActivityButton';
import PropTypes from 'prop-types';
 
function ActivityItem({title, body, createdAt, id, onDelete, onArsip}) {
        return (
                <React.Fragment>
                        <div className="alert alert-primary" style={{ height : '95%', marginTop : '30px'}}>
                                <ActivityItemBody title={title} body={body} createdAt={createdAt} />
                                <div className="card-body" style={{marginTop: '10px'}}>
                                        <DeleteActivity id={id} onDelete={onDelete}/>
                                        <DoneActivityButton id={id} onArsip={onArsip}/>
                                        <DetailActivity id={id}/>
                                </div>
                        </div>
                </React.Fragment>
                
        );
}

ActivityItem.propTypes = {
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
        onArsip: PropTypes.func.isRequired,
}

export default ActivityItem;