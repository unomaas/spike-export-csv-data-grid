import React, {useState}from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

const NewPlantForm = () => {
    const dispatch = useDispatch();
    
    //Initial state is an OBJECT, with keys id and name
    let [newPlant, setPlant] = useState('');

    const handleNameChange = (event) => {
        console.log('event happened');
        //Similar to in redux -- we dont want to get rid of the id field when we update name
        setPlant(event.target.value)
    }

    const addNewPlant = event => {
        event.preventDefault();
        dispatch({ type: 'ADD_PLANT', payload: {name: newPlant} });
        // clear input
        setPlant('');
    }

    return (
        <div>
            <h3>This is the form</h3>
            <pre>{JSON.stringify(newPlant)}</pre>
            <form onSubmit={addNewPlant}>
                <TextField 
                    type='text' 
                    value={newPlant} 
                    onChange={handleNameChange}
                    label="Enter Plant"
                    color="secondary"
                />
                <Button
                    onClick={addNewPlant}
                    variant="contained"
                    color="primary"
                >
                    Add New Plant
                </Button>
            </form>
        </div>
    );
}


export default NewPlantForm;
