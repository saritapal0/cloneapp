import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Lock from '../assets/Images/lock.webp'; // Import image

export default function Row41() {
  return (
    <Box>
      <Card sx={{ display: 'flex', mt: 0, mx:-11, minWidth: "100%", minHeight: 535, width: "700px", backgroundColor: '#bdbdbd', borderRadius: 0, marginRight: '10px' }}>
        <CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <Grid container direction="column" justifyContent="space-between" style={{ width: '40%', paddingLeft:"60px" }}>
            <Grid item>
              <Typography variant="h1" gutterBottom fontWeightBold="normal">Comprar seu imóvel e ter um cantinho só seu</Typography>
              <Typography variant="body1" paragraph fontWeight="normal">
                Conte com nossos consultores para conseguir as melhores taxas de financiamento, tirar todas as suas dúvidas e para qualquer suporte durante todo o processo.
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", width: "250px" }}>Ver apartamentos para alugar</Button>
              <Button variant="contained" color="primary" sx={{ borderRadius: '20px', color: 'black', backgroundColor: "white", mt: 2, width: "250px" }} endIcon={<ArrowForwardIcon />}>
                Como alugar no QuintoAndar
              </Button>
            </Grid>
          </Grid>
          <CardMedia
            component="img"
            sx={{ width: '50%', paddingRight: '50px' }} // Adjusted margin left to auto
            image={Lock} // Set the imported image variable as the source
            alt="Placeholder Image"
          />
        </CardContent>
      </Card>
    </Box>
  );
}
