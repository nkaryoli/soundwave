import { Box, Button, TextField, Typography } from '@mui/material';
import { themePalette } from '../config/theme.config';

export const Form = () => {
    return (
        <Box component="form" 
            sx={{'& > :not(style)': { m: 0, width: '25ch' }, 
                background: themePalette.FOOTER, 
                padding:'20px', 
                borderRadius:'10PX', 
                width:'350px'
            }}
            noValidate
            autoComplete="off"
            >
            <Typography variant="body1" component={'h3'} fontWeight={500}>Name:</Typography>
            <TextField id="outlined-basic" label="" variant="outlined" size='small' color="success"/>
            <Typography variant="body1" component={'h3'} fontWeight={500}>Email:</Typography>
            <TextField id="outlined-basic" label="" variant="outlined" size='small' color="success" />
            <Typography variant="body1" component={'h3'} fontWeight={500}>Password:</Typography>
            <TextField id="outlined-basic" label="" variant="outlined" size='small' color="success" />
            <Button variant='contained' color='secondary' size='small'>Join Now</Button>
        </Box>
    );
}