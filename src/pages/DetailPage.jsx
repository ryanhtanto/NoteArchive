import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/api';
import ActivityDetail from '../components/ActivityDetail';

const DetailPage = () => {
        const { id } = useParams()
        const [activity, setActivities] = React.useState()

        React.useEffect(() => {
                async function getActivities(){
                        const {error, data} = await getNote(id)
                        !error && setActivities(data)
                }
                getActivities()
        }, [])

        return(
                <ActivityDetail {...activity} />
        )
}

export default DetailPage;