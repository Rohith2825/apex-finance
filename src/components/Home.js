// src/components/Home.js
import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Box
      sx={{
        backgroundImage: 'url("/images/home-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'fixed',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)', // centers the box horizontally
        width: '100vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        p: 2,
        zIndex: -1,
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          color: 'white',
          mb: 2,
          fontWeight: 'bold',
          fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
        }}
      >
        Apex Racing Finances
      </Typography>
      <Typography
        variant="h5"
        component="p"
        sx={{
          color: 'white',
          mb: 4,
          fontSize: { xs: '1rem', sm: '1.5rem', md: '1.75rem' },
        }}
      >
        Welcome to our team cost management portal. Navigate using the menu above.
      </Typography>
      <Button
        component="a"
        href="/downloads/finance_report.pdf"
        download
        variant="contained"
        sx={{
          backgroundColor: '#DC143C',
          borderRadius: '20px',
          px: 3,
          py: 1.5,
          fontSize: { xs: '0.8rem', sm: '1rem' },
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#b01035',
          },
        }}
      >
        Download Now
      </Button>
    </Box>
  );
};

export default Home;
