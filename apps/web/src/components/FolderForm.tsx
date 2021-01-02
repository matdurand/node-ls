import { Button, TextField, Grid } from '@material-ui/core';
import React, { useState } from 'react';

interface Props {
  onSubmit: Function
}

const FolderFormComponent = (props: Props) => {

  const [path, setPath] = useState("");

  const handlePathChange = (event: any) => {
    setPath(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid item>
        <TextField 
          id="outlined-basic" 
          label="Enter a path (on the server)" 
          variant="outlined" 
          value={path}
          onChange={handlePathChange}/>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary"onClick={() => props.onSubmit(path)}>
          Show me the content
        </Button>
      </Grid>
    </React.Fragment>  );
}

export default FolderFormComponent;