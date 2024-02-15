import { Button, Container, Grid, Typography } from "@mui/material"
import { Circle } from "../components/Circle"
import { themePalette } from "../config/theme.config"

export const Home = () => {
    return (
        <Container sx={{display:'flex', justifyContent:'flex-end', height:'100vh', margin:'auto', overflow: 'hidden'}}>
            <Grid container spacing={1} sx={{height:'100%', display:'flex', alignContent:'end', p:'0', m:'0'}} >
            <Circle
                    width= '55vh'
                    height='55vh'
                    color= {themePalette.CIRCLE_1}
                    top= '33vh'
                    left= '6vh'
                
            />
            <Circle 
                    width= '55vh'
                    height='55vh'
                    color= {themePalette.CIRCLE_2}
                    top= '12vh'
                    left= '60vh'
                
            />
            <Circle
                    width= '95vh'
                    height='95vh'
                    color= {themePalette.CIRCLE_2}
                    top= '50vh'
                    left= '150vh'
                
            />
                <Grid item xs={1}></Grid>
                <Grid item xs={5} sx={{ display:'flex', justifyContent:'center', p:'0', m:'0'}} >
                    <img src='./src/assets/landing-page-girl.png' className="girl" />
                </Grid>
                <Grid item xs={5} className="grid" sx={{p:'0', mt:'7%'}}>
                    <Typography variant="subtitle2" component={'h1'} fontWeight={400}>Feel the music</Typography>
                    <Typography variant="body1" component={'p'} fontWeight={400} sx={{my:'15px', maxWidth:'260px'}}>Stream over 20 thousand song whit one click</Typography>
                    <Button variant="contained" color="secondary" size="small">Join now</Button>
                </Grid>
            </Grid>
        </Container>
    )
}
