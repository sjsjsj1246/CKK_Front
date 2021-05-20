/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import {
  Avatar,
  Container,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Typography,
  Link,
  Grid,
  Box,
} from '@material-ui/core';
import { experimentalStyled as styled } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { Link as LinkRoute } from 'react-router-dom';
import palette from '../../lib/styles/palette';

const CustomTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: `${palette.green.bold}`,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: `${palette.green.bold}`,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: `${palette.green.highBold}`,
    },
    '&:hover fieldset': {
      borderColor: `${palette.green.nomal}`,
    },
    '&.Mui-focused fieldset': {
      borderColor: `${palette.green.bold}`,
    },
  },
});

const CustomButton = styled(Button)({
  color: `${palette.green.mild}`,
  backgroundColor: `${palette.green.bold}`,
  '&:hover': {
    backgroundColor: palette.green.bold,
  },
});

export default function Login({ onLogin, onOauthKakao, onOauthGoogle }) {
  const history = useHistory();
  const emailRef = useRef();
  const pwdRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = pwdRef.current.value;
    onLogin(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: `${palette.green.bold}` }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%', // Fix IE11 issue.
            mt: 1,
          }}
        >
          <CustomTextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputRef={emailRef}
            sx={{
              '& label.Mui-focused': {
                color: 'green',
              },
            }}
          />
          <CustomTextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputRef={pwdRef}
          />

          <CustomButton
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 1,
              height: '3.5rem',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            onClick={handleLogin}
          >
            로그인
          </CustomButton>

          <Grid container>
            <Grid item xs></Grid>
            <Grid item>
              <LinkRoute
                to="/signup"
                style={{
                  fontSize: '0.8rem',
                  color: `${palette.green.highBold}`,
                }}
              >
                Don't have an account? Sign Up
              </LinkRoute>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
