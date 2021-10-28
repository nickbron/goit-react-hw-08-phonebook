import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';
import { TextField, Button, Box } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Email from '@mui/icons-material/Email';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box
      sx={{
        p: 3,
        display: 'flex',
        width: '350px',
        justifyContent: 'center',
      }}
    >
      <form onSubmit={handleSubmit} autoComplete="off">
        <h2>Sign up </h2>
        <TextField
          size="small"
          helperText="Please enter your name"
          margin="dense"
          label="Name"
          //size="string"
          type="text"
          name="name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          value={name}
          onChange={handleChange}
        />
        <TextField
          size="small"
          helperText="Please enter your email"
          margin="dense"
          label="Email"
          type="email"
          name="email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          value={email}
          onChange={handleChange}
        />
        <TextField
          size="small"
          helperText="Please enter your password"
          margin="dense"
          label="Password"
          type="password"
          name="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <VisibilityOff />
              </InputAdornment>
            ),
          }}
          value={password}
          onChange={handleChange}
          autoComplete="off"
        />

        <Button variant="contained" type="submit">
          Create an account
        </Button>
      </form>
    </Box>
  );
}
