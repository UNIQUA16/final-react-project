import Button from "@mui/material/Button";
import Media from "./Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";
import Grid from '@mui/material/Grid';
function Footer({}) {
  return (
    <div class="footer">
      
      <p> &copy; War On Drugs </p>
      <p>Social Media </p>
      <Grid container spacing ={1} direction='row' alignItems='center' justifyContent='center'>
      <Grid item >
        <FontAwesomeIcon icon={faTwitter} />
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faYoutube} />
      </Grid>
      <Grid item>
        <FontAwesomeIcon icon={faInstagram} />
      </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
