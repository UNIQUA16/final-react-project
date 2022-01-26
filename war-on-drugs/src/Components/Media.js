import Grid from '@mui/material/Grid';
function Media({}) {
    

    return (
        <div>
            <Grid container spacing={1} justifyContent='space-evenly' alignItems='center'>
                <Grid item xs={12}>
                </Grid>
                <Grid item xs={12} md={6}>
         <iframe id = "YT1" width="500" height="320" src="https://www.youtube.com/embed/jbETGBSwQ0M?list=PLDbSvEZka6GGanXjSfH1bQNVheppFQWWo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </Grid>
                <Grid item xs={12}  md={6}>
         <iframe id = "YT1" width="500" height="320" src="https://www.youtube.com/embed/Xf5qFIpJ2sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
                <Grid item xs={12}  md={12}>
         <iframe  id = "YT2" width="1019" height="573" src="https://www.youtube.com/embed/pCyYSQLAEFk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </Grid>
            </Grid>
        </div>
    );
}

export default Media;
