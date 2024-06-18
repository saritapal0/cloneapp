import React from 'react';
import img2 from '../assets/Images/img2.webp'; // Import your image source
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function BlueCard() {
  return (
    <Card sx={{ border: '25px solid blue', mt: 8, width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', borderRadius: 0, height: '100%' }}>
      <CardContent sx={{ flex: '1 0 auto', paddingTop: '20px', paddingBottom: '20px' }}>
        <Typography variant="h4">
          Vem ver os Favoritos da Malu Borges no QuintoAndar.
        </Typography>
        <Typography sx={{ mt: 3 }}>
          Procurando um novo cenário pro seu look final? Veja as casas e apartamentos que a influenciadora selecionou a dedo pra quem quer um paraíso dos looks, um cantinho pro sono de beleza ou pra quem tem crianças ligadas nos 220.
        </Typography>
      </CardContent>
      <Box sx={{ marginBottom: '20px', width: '100%', textAlign: 'center' }}>
        <Button variant="contained" color="primary" sx={{ width: '80%', maxWidth: '300px', height: '50px', borderRadius: '30px' }}>
          Busque seu imóvel
        </Button>
      </Box>
    </Card>
  );
}

export default function Row2() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="flex-end" alignItems="center" >
          <img src={img2} alt="Description of the image"
            style={{ width: '100%', maxWidth: '100%', height: '500px', marginTop: '65px', marginRight: '-47px' }} />
        </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center" alignItems="center" height="500px" mt={5} pl={2} pr={3} >
          <BlueCard />
        </Box>
      </Grid>
    </Grid>
  );
}
