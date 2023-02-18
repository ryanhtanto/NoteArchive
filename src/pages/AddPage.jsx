import React from 'react';
// import { addNote } from '../utils/index';
import { addNote } from '../utils/api';
import FormSubmit from '../components/FormSubmit';
import { useNavigate } from 'react-router-dom';
 
function AddPage() {
        const navigate = useNavigate();
        async function onAddActivityHandler(activity) {
                await addNote(activity)
                navigate('/');
        }
        
        return (
                <section>
                        <h2>Tambah Notes</h2>
                        <FormSubmit addActivities={onAddActivityHandler} />
                </section>
        )
}
 
export default AddPage;