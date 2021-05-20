import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import {
  Button,
  Avatar,
  Container,
  useMediaQuery,
  Toolbar,
  TextField,
  Typography,
  Box,
} from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import palette from '../../lib/styles/palette';

const sections = [
  { title: '문제', url: '/problem_list' },
  { title: '채점 현황', url: '#' },
];
const SectionWrapper = styled(Box)`
  flex: 1;
  display: flex;
`;

const Header = (props) => {
  const isMobile = useMediaQuery('(max-width: 568px)');

  return (
    <Container maxWidth="lg">
      <Toolbar
        sx={{
          alignItems: 'center',
          borderBottom: `1px solid ${palette.gray[4]}`,
        }}
      >
        <Link to="/">
          <Avatar src="https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Ft1.daumcdn.net%2Fcfile%2Ftistory%2F121A9F344D1AD6CE2A" />
        </Link>
        {!isMobile && (
          <Link to="/">
            <Typography
              fontSize="1.5rem"
              ml={1}
              mr={1}
              sx={{ whiteSpace: 'nowrap' }}
            >
              C<span style={{ color: `${palette.green.highBold}` }}>KK</span>
            </Typography>
          </Link>
        )}
        <SectionWrapper>
          {sections.map((section) => (
            <Link
              to={section.url}
              key={section.title}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexShrink: 0,
              }}
            >
              <Button
                color="inherit"
                sx={{ width: '7rem', fontSize: '1.2rem' }}
              >
                {section.title}
              </Button>
            </Link>
          ))}
        </SectionWrapper>

        <IconButton>
          <PersonIcon />
        </IconButton>
        <Typography>sjsjsj1246</Typography>
        <Link to="/login">
          <Button
            size="mall"
            color="inherit"
            sx={{
              color: `${palette.green.highBold}`,
              marginLeft: '1rem',
              whiteSpace: 'nowrap',
            }}
          >
            LOG IN
          </Button>
        </Link>
      </Toolbar>
    </Container>
  );
};

export default Header;
