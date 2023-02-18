import React from 'react';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/api';
import UndoneActivity from '../components/UndoneActivity';
 
const HomePage = () => {
        const [activities, setActivities] = React.useState([])
        React.useEffect(() => {
                getActiveNotes().then(({ data }) => {
                        setActivities(data);
                });
        }, []);
        
        async function onDeleteHandler(id) {
                await deleteNote(id);
                const { data } = await getActiveNotes();
                setActivities(data)
        }

        async function onArchivedHandler(id) {
                await archiveNote(id);
                const { data } = await getActiveNotes();
                setActivities(data)
        }
        
        return (
                <section>
                        <UndoneActivity activities={activities} onDelete={onDeleteHandler} onArsip={onArchivedHandler}/>
                </section>
        )
}
 
export default HomePage;