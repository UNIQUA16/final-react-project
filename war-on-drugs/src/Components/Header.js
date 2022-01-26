import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquareAlt } from "@fortawesome/free-solid-svg-icons";




function Header({}) {
  return (
    <div className="Header">
      <h1>Social and Psychological Issues of Drug Use and Policies</h1>
      <p>
        {" "}
        by Uniqua Robinson, Migeul Eliotte, Chad Mathlin | January 26, 2022 |{" "}
      </p>
      <div className='SubHeader'>
          <p> Treatment calls are waiting for you: <FontAwesomeIcon icon={faPhoneSquareAlt} />(877) 729-4540</p>
      </div>
    </div>
  );
}

export default Header;
