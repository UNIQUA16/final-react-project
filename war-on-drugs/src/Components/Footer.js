import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


function Footer({}) {
    

    return (

        <footer>
            <Box>
                <Container maxWidth ="lg">
                <Grid container spacing={5}>
                    <Grid item xs={4} sm={4}>
                        <Box borderBottom={1}>Contact Us </Box>
                        <Box></Box>
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </footer>
// =======
// //         <div class="footer">
// //           <p>Footer.</p>
// //         </div>
// // >>>>>>> 85767a9596c40827c7fbd3d82d4b788c6cb031d5
// //     );
}

export default Footer;
