import { Box, Button, Container, Grid, Typography } from "@mui/material"
import { Footer } from '../components/Footer'

export const Discover = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{display:'flex', flexDirection:'column', justifyContent:'center', height:'100vh'}}>
        <Grid container spacing={2} >
          <Grid item xs={8} sx={{ display:'flex', flexDirection:'column', justifyContent:'center', p:'0', m:'0'}}>
            <Typography variant="h5" component={'h1'} fontWeight={400}>Discover new music</Typography>
            <Box sx={{my:'20px', display:'flex'}}>
              <Button variant="contained" size='small' color="info" sx={{mr:'10px', paddingY:'10px', display:'flex', flexDirection:'column', borderRadius: '0'}}>
                <img src="./src/assets/microphone.svg" className="icons" />
                Charts
              </Button>
              <Button variant="contained" size='small' color="info" sx={{mr:'10px', display:'flex', flexDirection:'column', borderRadius: '0'}}>
                <img src="./src/assets/albums.svg" className="icons" />
                Albums
              </Button>
              <Button variant="contained" size='small' color="info"  sx={{display:'flex', flexDirection:'column', borderRadius: '0'}}>
                <img src="./src/assets/more.svg" className="icons" />
                More
              </Button>
            </Box>
            <Typography variant="subtitle2" component={'p'} fontWeight={200}>By joinig you can benefic by listening to the latest albums released.</Typography>      
          </Grid>
          <Grid item xs={4}>
            <img src='./src/assets/covers.jpg' className="covers"/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  )
}
