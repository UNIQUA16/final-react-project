import Button from "@mui/material/Button";
import Media from "./Media";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons";

function Footer({}) {
  return (
    <div class="footer">
      <p> &copy; War On Drugs </p>
      <p>Social Media </p>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faYoutube} />
      <FontAwesomeIcon icon={faInstagram} />
    </div>
  );
}

export default Footer;
