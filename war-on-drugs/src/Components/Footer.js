import Button from "@mui/material/Button";
import Media from "./Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import Grid from "@mui/material/Grid";


function Footer({}) {
  return (
    <div class="footer">
      <p>  War On Drugs &copy; </p>
      <p>Social Media </p>

      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={1}>
          <i class="fas fa-camera fa-2x">
            <FontAwesomeIcon icon={faTwitter} className="Twitter" />
          </i>
        </Grid>

        <Grid item xs={1}>
          <i class="fas fa-camera fa-2x">
            <FontAwesomeIcon icon={faYoutube} className="Youtube" />
          </i>
        </Grid>

        <Grid item xs={1}>
          <i class="fas fa-camera fa-2x" >
            <FontAwesomeIcon icon={faInstagram} className="Instagram" />
          </i>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
