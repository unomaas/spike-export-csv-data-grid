import React from 'react';
import NewPlantForm from '../NewPlantForm/NewPlantForm';
import PlantList from '../PlantList/PlantList';
import './Garden.css';

function Garden() {
  return (
    <div className="flex-container">
      <div className='col-side'></div>
      <div className="col-main">
        <h2>This is the garden!</h2>
        {/* Redux State isn't needed in the garden, it is just a parent component */}
        {/* Thanks to redux, there is no need to pass along props! */}
        <NewPlantForm />
        <PlantList />
      </div>
      <div className='col-side'></div>

    </div>
  )
}

export default Garden;
