import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Footer from './Footer';
import Header from './Header';

const MainBanner = ({ url, title }) => (
  <Paper
    sx={{
      height: '20rem',
      margin: '1rem 0',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Typography
      component="h1"
      variant="h1"
      color="inherit"
      sx={{ color: 'white', margin: '1rem 0' }}
    >
      {title}
    </Typography>
  </Paper>
);

const FeaturePost = () => (
  <Grid item xs={12} md={4}>
    <Paper
      sx={{
        height: '23rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Typography component="h1" variant="h4" mt={1} mb={1}>
        설명
      </Typography>
    </Paper>
  </Grid>
);

const Main = (props) => {
  return (
    <Container maxWidth="lg">
      <MainBanner
        title="Code King Kong"
        url="https://static.rogerebert.com/uploads/blog_post/primary_image/features/a-guide-to-monkey-business-the-history-of-king-kong/rev-1-GVK-FP-0002_High_Res_JPEG.jpg"
      />
      <Grid container spacing={12} p={8}>
        {[1, 3, 4].map(() => (
          <FeaturePost />
        ))}
      </Grid>
    </Container>
  );
};

export default Main;
