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
    );
}

export default Footer;
