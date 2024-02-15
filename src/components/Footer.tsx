import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';

export const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <footer className='footer'>
            <Box>
                <Link to={'/'} className='links'>
                    About Us
                </Link>
                <Link to={'/'} className='links'>
                    Contact
                </Link>
            </Box>
            <Box>                   
                <Link to={'/'} className='links'>
                    <img src='./src/assets/twitter.svg' className='footerIcon'/>
                    Twitter
                </Link>
                <Link to={'/'} className='links'>
                    <FacebookIcon sx={{height:'13px'}}/>
                    Facebook
                </Link>
            </Box>
        </footer>
        </Box>
    );
}