import {
  Avatar,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useRef } from 'react';
import { Link as LinkRoute } from 'react-router-dom';
import palette from '../../lib/styles/palette';

export default function Signup({ onSignup }) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passworldRef = useRef();

  const handleSignup = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;
    const name = firstName + lastName;
    const email = emailRef.current.value;
    const password = emailRef.current.value;
    console.log(name);
    console.log(email);
    console.log(password);
    onSignup({ name, email, password });
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
          Sign up
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{
            width: '100%', // Fix IE11 issue.
            mt: 3,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={firstNameRef}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={lastNameRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={emailRef}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={passworldRef}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="inherit"
            sx={{
              mt: 3,
              mb: 1,
              height: '3.5rem',
              color: `${palette.green.mild}`,
              backgroundColor: `${palette.green.bold}`,
              '&:hover': {
                backgroundColor: palette.green.bold,
              },
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
            onClick={handleSignup}
          >
            회원 가입
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <LinkRoute
                to="/login"
                style={{
                  fontSize: '0.8rem',
                  color: `${palette.green.highBold}`,
                }}
              >
                Already have an account? Sign in
              </LinkRoute>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
