import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MultipleSelect from './MultipleSelect';


export default function Step2Form() {
  
  const [description, setDescription] = React.useState('');



  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Partager une description de service
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            id="Title"
            name="Title"
            label="Servece Title"
            fullWidth
            autoComplete="given-Title"
            variant="standard"
            color="success" 
          />
        </Grid>
        <Grid item xs={12} sm={12}>
          <MultipleSelect />
        </Grid>
        <Grid item xs={12}>
          <TextField color="success" 
            id="description"
            name="description"
            label=" Short Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            
          />
        </Grid>
        <Grid item xs={12}>
        <TextField
          id="outlined-number"
          label="Delivrey Time *"
          type="number"
          color="success" 
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        </Grid>
        <Grid item xs={12} sm={12}>
        <TextField
          id="outlined-number"
          label="Price *"
          type="number"
          color="success" 
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
        />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
