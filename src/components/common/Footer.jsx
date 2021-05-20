/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid, Toolbar, useMediaQuery } from '@material-ui/core';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const siteMaps = [
  { title: '문제', url: '/problem_list' },
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
        sx={{ marginTop: '3rem' }}
      >
        <Grid item container xs={6} md={4} flexDirection="column">
          {siteMaps.map((site) => (
            <Grid sx={{ textAlign: 'center', '&+&': { marginTop: '1rem' } }}>
              <Link
                to={site.url}
                css={{
                  fontSize: '0.9rem',
                  color: `${palette.gray[7]}`,
                  '&:hover': { color: `${palette.green.highBold}` },
                }}
              >
                {site.title}
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid item container xs={6} md={4} flexDirection="column">
          {sections.map((section) => (
            <Grid sx={{ textAlign: 'center', '&+&': { marginTop: '1rem' } }}>
              <Link
                css={{
                  fontSize: '0.9rem',
                  color: `${palette.gray[7]}`,
                  '&:hover': { color: `${palette.green.highBold}` },
                }}
                to={section.url}
              >
                {section.title}
              </Link>
            </Grid>
          ))}
        </Grid>
        {!md && (
          <Grid item container xs={12} md={4} justifyContent="center">
            <img
              src="https://avatars.githubusercontent.com/u/84124950?s=200&v=4"
              alt="logo"
              style={{
                width: '9rem',
                height: '9rem',
                borderRadius: '5px',
              }}
            />
          </Grid>
        )}
      </Grid>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/">
          CodeKingKong
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    </Container>
  );
};

export default Footer;
