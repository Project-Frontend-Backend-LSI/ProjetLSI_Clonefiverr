
import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MultipleSelect from './MultipleSelect';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { green } from '@mui/material/colors';

const theme = createTheme({
palette: {
primary: green,
},
});

export default function Step1Form() {
const [selectedImage, setSelectedImage] = React.useState(null);
const [description, setDescription] = React.useState('');

const handleImageSelect = (event) => {
setSelectedImage(event.target.files[0]);
};

const handleImageUpload = () => {
console.log('Envoi de limage :', selectedImage);
};

const handleDescriptionChange = (event) => {
setDescription(event.target.value);
};

return (
<ThemeProvider theme={theme}>
<>
<Typography variant="h6" gutterBottom>
Partager une description de service
</Typography>
<Grid container spacing={3}>
<Grid item xs={12} sm={12}>
<TextField
            required
            id="Title"
            name="Title"
            label="Title"
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
<TextField
            id="description"
            name="description"
            label="Description"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={handleDescriptionChange}
            color="success" 
          />
</Grid>
<Grid item xs={12}>
<Input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageSelect}
            fullWidth
            color="success" 
          />
</Grid>
<Grid item xs={12}>
<Button variant="contained" color="primary" onClick={handleImageUpload}>
Envoyer limage
</Button>
</Grid>
</Grid>
</>
</ThemeProvider>
);
}