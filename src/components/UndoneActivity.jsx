import React from 'react';
import ActivityItem from './ActivityItem';
import IsEmpty from './IsEmpty';
import PropTypes from 'prop-types';
 
function UndoneActivity({ activities, onDelete, onArsip }) {
        const archivedFalse = activities.filter((activity) => activity.archived === false)
        if(archivedFalse.length === 0){
                return <IsEmpty />
        }else{
                return (
                        <div className='row'>
                                {
                                        activities.map((activity) => {
                                                if(activity.archived === false){
                                                        return(
                                                                <div className='col-sm-6 col-md-4 col-lg-3' key={activity.id}>
                                                                        <ActivityItem id={activity.id} onDelete={onDelete} onArsip={onArsip} {...activity} />
                                                                </div>
                                                        ) 
                                                }         
                                        })
                                }
                        </div>
                );
        }
}

UndoneActivity.propTypes = {
        activities: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
        onArsip: PropTypes.func.isRequired,
}
 
export default UndoneActivity;