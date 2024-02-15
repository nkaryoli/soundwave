
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar  sx={{paddingX:'18%', paddingY:'10px', boxShadow:'none', background:'none'}}>
        <Toolbar>
          <Link to={'/'}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <img src='./src/assets/logo.png' className='logo'/>
            </IconButton>
          </Link>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }} fontWeight={400}>
            Soundwave
          </Typography>
            <Link to={'/Discover'} className='link' >
                Discover
            </Link>
            <Link to={'/Join'} className='link'>
                Join
            </Link>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}