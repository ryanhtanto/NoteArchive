import React from 'react';
import { deleteNote, unarchiveNote, getArchivedNotes } from '../utils/api';
import DoneActivity from '../components/DoneActivity';

const ArsipPage = () => {
        const [activities, setActivities] = React.useState([])
        React.useEffect(() => {
                getArchivedNotes().then(({ data }) => {
                        setActivities(data);
                });
        }, []);
        
        async function onDeleteHandler(id) {
                await deleteNote(id);
                const { data } = await getArchivedNotes();
                setActivities(data)
        }

        async function onUnArchivedHandler(id) {
                await unarchiveNote(id);
                const { data } = await getArchivedNotes();
                setActivities(data)
        }

        return (
                <section>
                        <DoneActivity activities={activities} onDelete={onDeleteHandler} onUndone={onUnArchivedHandler} />
                </section>
        )
}
 
export default ArsipPage;