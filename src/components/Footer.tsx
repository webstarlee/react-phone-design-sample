import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faBell, faCompass, faWallet } from '@fortawesome/free-solid-svg-icons'

const Footer: React.FC = () => {

  const [open, isOpen] = React.useState<Number>(0)

  const HandleBtnClick = (num: number | React.SetStateAction<Number>) => {
    isOpen(num)
  }

  return (
    <footer className="footer-container">
      <Button onClick={() => HandleBtnClick(0)} link>
        <FontAwesomeIcon icon={faWallet} color={open==0? "#4c5968": "#aeb8c4"} size="xl" />
      </Button>
      <Button onClick={() => HandleBtnClick(1)} link>
        <FontAwesomeIcon icon={faCompass} color={open==1? "#4c5968": "#aeb8c4"} size="xl" />
      </Button>
      <Button onClick={() => HandleBtnClick(2)} link>
        <FontAwesomeIcon icon={faBell} color={open==2? "#4c5968": "#aeb8c4"} size="xl" />
      </Button>
      <Button onClick={() => HandleBtnClick(3)} link>
        <FontAwesomeIcon icon={faGear} color={open==3? "#4c5968": "#aeb8c4"} size="xl" />
      </Button>
    </footer>
  );
};

export default Footer;
