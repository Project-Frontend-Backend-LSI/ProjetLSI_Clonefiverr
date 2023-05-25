
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import Card_service from '../../Component/Service_Form/Card_service';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Frelancer() {
    return (
        <Box sx={{ flexGrow: 1, position:'absolute', top:'230px' }}>
        <Grid container spacing={2}>
            <Grid container xs={12} md={7} lg={12} spacing={4}>
            <Grid xs={6} lg={4}>
                <Item>
                <Box
                    id="category-a"
                    sx={{ fontSize: '20px', textTransform: 'uppercase' }}
                >
                    Ajouter des services
                </Box>
                <Box 
                    component="ul"
                    sx={{
                    color: '#19a463',}} 
                >       
                    <h1>Hello samir,</h1>
                    <h3>you can add service</h3>
                    <Link component={Box} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px' }} >
                        
                        <Icon sx={{ fontSize: '80px',width:'200px',height:'100px',backgroundColor:"green",borderRadius:'50px',color:'white' }}>+</Icon>
                    </Link>

                </Box>
                </Item>
            </Grid>
            <Grid xs={6} lg={8}>
                <Item>
                <Box
                    id="category-b"
                    sx={{ fontSize: '20px', textTransform: 'uppercase' }}
                >
                    Votre Information
                </Box>
                <Box component="ul" aria-labelledby="category-b" sx={{ pl: 3 }}></Box>
                </Item>
            </Grid>
            <Grid xs={6} lg={12} spacing={3}>
                <Item>
                <Box
                    id="category-c"
                    sx={{ fontSize: '12px', textTransform: 'uppercase' }}
                >
                    Category C
                </Box>
                </Item>
            </Grid>
            </Grid>
            <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {Array.from(Array(6)).map((_, index) => (
                    <Grid xs={2} sm={4} md={4} key={index}>
                        <Card_service />
                    </Grid>
                    ))}
                    </Grid>
        </Grid>
        </Box>
    );
}

export default Frelancer;
