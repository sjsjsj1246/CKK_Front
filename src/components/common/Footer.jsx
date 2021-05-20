import * as React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Grid, Toolbar, useMediaQuery } from '@material-ui/core';
import palette from '../../lib/styles/palette';

const siteMaps = [
  { title: '문제', url: '#' },
  { title: '채점현황', url: '#' },
];

const sections = [
  { title: '회사소개', url: '#' },
  { title: '공지사항', url: '#' },
  { title: '개인정보 처리방침', url: '#' },
  { title: '이용약관', url: 'About' },
];

const Footer = () => {
  const md = useMediaQuery('(max-width: 959px)');

  return (
    <Container component="footer" maxWidth="lg">
      <Grid
        container
        spacing={4}
        justifyContent="center"
        p={[0, 4, 4, 2]}
        sx={{ borderTop: `1.5px solid ${palette.gray[4]}` }}
      >
        <Grid item container xs={6} md={4} flexDirection="column">
          {siteMaps.map((site) => (
            <Grid sx={{ textAlign: 'center', '&+&': { marginTop: '1rem' } }}>
              {site.title}
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={6} md={4} flexDirection="column">
          {sections.map((section) => (
            <Grid sx={{ textAlign: 'center', '&+&': { marginTop: '1rem' } }}>
              {section.title}
            </Grid>
          ))}
        </Grid>
        {!md && (
          <Grid item container xs={12} md={4} justifyContent="center">
            <img
              src="https://compote.slate.com/images/d5c86479-001d-4e9c-8bdd-59a8c7a96358.jpg"
              alt="logo"
              style={{
                width: '9rem',
                height: '9rem',
              }}
            />
          </Grid>
        )}
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          CodeKingKong
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
};

export default Footer;
