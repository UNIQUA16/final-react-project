import Button from "@mui/material/Button";
import Media from "./Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutubeSquare,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Grid from "@mui/material/Grid";

function Footer({}) {
  return (
    <div class="footer">
      <p> &copy; War On Drugs </p>
      <p>Social Media </p>

      <Grid
        container
        spacing={1}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <i class="fas fa-camera fa-2x">
          <Grid item>
            <FontAwesomeIcon icon={faTwitter} className="Twitter" />
          </Grid>

          <Grid item>
            <FontAwesomeIcon icon={faYoutubeSquare} className="Youtube" />
          </Grid>

          <Grid item>
            <FontAwesomeIcon icon={faInstagram} className="Instagram" />
          </Grid>
        </i>
      </Grid>
    </div>
  );
}

export default Footer;
