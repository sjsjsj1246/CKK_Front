import { Container, ImageList, ImageListItem } from '@material-ui/core';
import React from 'react';
import ProblemCard from './ProblemCard';

const ProblemList = (props) => {
  return (
    <Container maxWidth="lg">
      <ImageList
        gap={18}
        sx={{
          display: 'flex',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          overflowY: 'hidden',
          height: '420px',
          padding: '0.5rem 0 0 0.5rem',
        }}
      >
        <ImageListItem
          sx={{
            width: '15rem',
            flex: '0 0 auto',
          }}
        >
          <ProblemCard />
        </ImageListItem>
        <ImageListItem
          sx={{
            width: '15rem',
            flex: '0 0 auto',
          }}
        >
          <ProblemCard />
        </ImageListItem>
        <ImageListItem
          sx={{
            width: '15rem',
            flex: '0 0 auto',
          }}
        >
          <ProblemCard />
        </ImageListItem>
      </ImageList>
    </Container>
  );
};
export default ProblemList;
