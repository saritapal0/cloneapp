import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Gate from '../assets/Images/Gate.webp'; // Import image
import image5 from '../assets/Images/image5.webp';

export default function Row3() {

  const handleImageLoad = (event) => {
    // You can handle image load events here if needed
  };

  return (
    <Box>
      <Grid container spacing={2} justifyContent="center" alignItems="center" ml={2} mt={6}>
        {/* Grid item for the first Card */}
        <Grid item xs={12} sm={6} >
          <Card sx={{ display: 'flex', width:'100%',height:"560px", backgroundColor: '#fce4ec', borderRadius: 0 }}>
            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Grid container spacing={2} justifyContent="flex-start" alignItems="center">
                {/* Text content */}
                <Grid item xs={12} sm={6}>
                  <Typography variant="h1" gutterBottom fontWeight="normal">Financie seu imóvel com nossa assessoria</Typography>
                  <Typography variant="body1" paragraph fontWeight="normal">
                  Aqui você pode contar com a nossa ajuda para financiar seu imóvel de forma prática. Ainda buscamos as melhores taxas para você!
                  </Typography>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", width: "250px" }}>Ver apartamentos para alugar</Button>
                  <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", mt: 2, width: "250px" }} endIcon={<ArrowForwardIcon />}>
                    Como alugar no QuintoAndar
                  </Button>
                </Grid>
                {/* Image */}
                <Grid item xs={12} sm={6} >
                  <CardMedia
                    component="img"
                    sx={{ width: '80%', height: '100%', maxHeight: 300, alignSelf: 'center',}}
                    image={Gate}
                    alt="Table Image"
                  />
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Grid item for the second Card */}
        <Grid item xs={12} sm={6}>
          <CardMedia
            component="img"
            src={image5}
            alt="Main Image"
            onLoad={handleImageLoad}  // You can handle image load event if needed
            sx={{ width: '100%', height: '100%',Height: "500px", ml:0, paddingRight:10}}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
