import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';
import './AppBar.scss'

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static" className="navBar">
        <Toolbar>
            <Button variant="outlined">
                <Link to="/Signup">Sign Up</Link>
            </Button>
            <Button variant="outlined">
                <Link to="/Signin">Sign In</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}