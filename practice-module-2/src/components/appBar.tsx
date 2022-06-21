
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import '../styles/appBar.scss'


const ResponsiveAppBar = () => {

  return (
    <AppBar position="static">
    
        <Toolbar disableGutters>
        
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 1,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              marginLeft: '1rem'
            }}
          >
            FETCH PLACEHOLDER API USING REDUX ||
          
          </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>

                <Button>
                    <Typography variant='h6'>
                        <Link to='/posts' className='links'>Posts</Link>
                    </Typography>
                </Button>
                <Button>
                    <Typography variant='h6'>
                        <Link to='/albums' className='links'>Albums</Link>
                    </Typography>
                </Button>
        
            </Box>
        </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;