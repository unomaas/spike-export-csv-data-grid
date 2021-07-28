import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';


function PlantItem({plant}) {
    
    const dispatch = useDispatch(); 


    // handle click event for delete button
    const handleDelete = (plantId) => {
        // console.log(plantId);
        dispatch({type: 'REMOVE_PLANT', payload: plantId});
    }


    return (
        <div>
            <h3>Plant: {plant.name}</h3>
            <Button
                variant="contained"
                onClick={() => handleDelete(plant.id)}
            >
                Delete
            </Button>
        </div>
        
    )
}

export default PlantItem;