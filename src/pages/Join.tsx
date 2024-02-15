
import { Form } from '../components/Form'
import { Footer } from '../components/Footer'
import { Container, Grid, Typography } from '@mui/material'
import { themePalette } from '../config/theme.config'
import { Circle } from '../components/Circle'

export const Join = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100vh'}}>
            <Grid container spacing={0} >
                <Grid item xs={6} sx={{mt:'20vh', display:'flex'}}>
                <Circle
                    width= '75vh'
                    height='75vh'
                    color= {themePalette.CIRCLE_1}
                    top= '30vh'
                    left= '-10vh'
                
                />
                <Circle 
                        width= '65vh'
                        height='65vh'
                        color= {themePalette.CIRCLE_2}
                        top= '-25vh'
                        left= '42vh'
                    
                />
                    <Typography variant='h4' sx={{mr:'10px'}} fontWeight={700}>Join the</Typography>
                    <Typography variant='h4' color={themePalette.ACCENT_TEXT} fontWeight={700}>fun.</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display:'flex', flexDirection:'column', justifyContent:'center', p:'0', m:'0'}}>
                    <Form />
                </Grid>
            </Grid>
        </Container>
      <Footer />
    </>
  )
}
