import { Box, Typography, Divider } from '@mui/material';
import React from 'react';

export default function Text1() {
  return (
    <Box sx={{ mx: 5,  mt:5}}>
      <Typography variant='h1'>
        Onde você quiser, tem um QuintoAndar
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h4" component="div" sx={{  mt: 5 }}>
          Alugar
        </Typography>
        <Typography variant="h4" component="div" sx={{ mx: 10 ,mt: 5}}>
          Comprar
        </Typography>
      </Box>
      <Divider />
    </Box>
  );
}
