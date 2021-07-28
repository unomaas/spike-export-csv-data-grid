import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PlantItem from '../PlantItem/PlantItem';

import { DataGrid, GridToolbar, GridToolbarContainer, GridToolbarExport } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';


function PlantList() {
  const dispatch = useDispatch();

  const reduxState = useSelector(store => store);
  const plantList = reduxState.plantList

  console.log('plant list', plantList);

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }



  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'name',
      headerName: 'Plant name',
      width: 150,
      editable: true,
    },
    {
      field: 'kingdom',
      headerName: 'Kingdom',
      width: 150,
      editable: true,
    },
    {
      field: 'clade',
      headerName: 'Clade',
      width: 150,
      editable: true,
    },
    {
      field: 'gfdgdf',
      headerName: 'Cladgfdsgfe',
      width: 150,
      editable: true,
    },
    {
      field: 'gfdsgfdsg',
      headerName: 'Clgfdsgfdsgfdsgfsdgade',
      width: 150,
      editable: true,
    },
    {
      field: 'clafdsf4r43de',
      headerName: 'Cladgfdgsfgdrsgfsfe',
      width: 150,
      editable: true,
    },
    {
      field: 'c42354354lade',
      headerName: 'Clgfgsrdsgfdsade',
      width: 150,
      editable: true,
    },
    {
      field: 'cla43534543de',
      headerName: 'Clagfdgsdfgde',
      width: 150,
      editable: true,
    },
    {
      field: 'cl32423ade',
      headerName: 'Cladedfsfsd',
      width: 150,
      editable: true,
    },
    {
      field: 'clade3242342',
      headerName: 'Cladtrgdfsgdfse',
      width: 150,
      editable: true,
    },
    {
      field: 'cla432fdgdfs42de',
      headerName: 'Clgfdsgfdsgfdsgade',
      width: 150,
      editable: true,
    },
    {
      field: 'clade',
      headerName: 'Clade',
      width: 150,
      editable: true,
    }
  
  
  ]

  const rows = plantList;


  useEffect(() => {
    console.log('component did mount');
    // dispatch an action to request the plantList from the API
    dispatch({ type: 'FETCH_PLANT' })
  }, []);


  return (
    <div>
      <h3>This is the plant list</h3>
      {/* {plantList.map(plant => (
                <PlantItem plant={plant} key={plant.id}/>
            ))} */}


      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          components={{
            Toolbar: CustomToolbar,
          }}
          // checkboxSelection
          // OnEditCellChangeCommitted --> HandleEditClick  
          // OnSelectionModelChange --> Bulk selection/delete/etc. 
        />
        <Button
          variant="contained"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}

export default PlantList;
