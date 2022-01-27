import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";

function Header({}) {
  return (
    <div className="Header">
      <h1>Social and Psychological Issues of Drug Use and Policies</h1>
      <p>
        {" "}
        by Uniqua Robinson, Migeul Eliotte, Chad Mathlin | January 26, 2022 |{" "}
      </p>
      <div className="SubHeader">
        <p>
          {" "}
          Need Support? Call:
          <Button variant="contained" color="secondary">
            <FontAwesomeIcon icon={faPhoneSquareAlt} />
            (877) 729-4540
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Header;
