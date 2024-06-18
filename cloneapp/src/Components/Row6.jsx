import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box, Divider } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Ph from '../assets/Images/Ph.webp'; // Import image
import Row61 from '../Components/Row61'


const Row6 = () => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center" ml={2} mt={5}>
      <Grid item xs={12} sm={6}>
        <Card sx={{ display: 'flex',  backgroundColor: '#3f51b5', borderRadius: 0 ,minHeight:525, width:"675px"}}>
          <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <Grid container direction="column" justifyContent="space-between" style={{ width: '20%' }}>
              <Grid item>
                <Typography variant="body1" gutterBottom fontWeight="normal">Proprietário, boa notícia:</Typography>
                <Divider />
                <Typography variant="h1" paragraph fontWeight="normal" color="white">
                  No QuintoAndar
                  seu imóvel
                  aluga rápido.
                </Typography>
                <Divider />
              </Grid>
              <Grid item sx={{mt:8,}}>
                <Button variant="contained" color="primary" sx={{borderRadius: '30px', color: 'black', backgroundColor: "white", mt: 2, width: "200px", height: "50px" }} endIcon={<ArrowForwardIcon />}>
                  Anunciar agora
                </Button>
              </Grid>
            </Grid>
            <CardMedia
              component="img"
              sx={{ width: '40%' }}
              image={Ph} // Set the imported image variable as the source
              alt="Placeholder Image"
            />
          </CardContent>
          {/* If Row61 is a separate component, you can include it like this */}
          {/* <Row61 /> */}
        </Card>
      </Grid>
    <Row61/>
    </Grid>
  );
};

export default Row6;
