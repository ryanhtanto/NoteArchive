import React from 'react';
import ActivityItemBody from './ActivityItemBody';
import DeleteActivity from './DeleteActivity';
import DetailActivity from './DetailActivity';
import UndoneActivityButton from './UndoneActivityButton';
import PropTypes from 'prop-types';
 
function ActivityItemDone({title, body, createdAt, id, onDelete, onUndone}) {
        return (
                <React.Fragment>
                        <div className="alert alert-success" style={{ height : '95%', marginTop : '30px'}}>
                                <ActivityItemBody title={title} body={body} createdAt={createdAt} />
                                <div className="card-body" style={{marginTop: '10px'}}>
                                        <DeleteActivity id={id} onDelete={onDelete}/>
                                        <UndoneActivityButton id={id} onUndone={onUndone} />
                                        <DetailActivity id={id}/>
                                </div>
                        </div>
                </React.Fragment>
                
        );
}
ActivityItemDone.propTypes = {
        title: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        body: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        onDelete: PropTypes.func.isRequired,
        onUndone: PropTypes.func.isRequired,
}
 
export default ActivityItemDone;