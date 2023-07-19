import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faClose, faEllipsisVertical, faHome, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";

const Header: React.FC = () => {
  const [open, isOpen] = React.useState<Boolean>(false)

  const HandleBtnClick = () => {
    console.log("Rank Math")
  }

  const MenuToggleBtnClick = () => {
    isOpen(!open)
  }

  return (
    <header className="header-container">
      <Button onClick={HandleBtnClick} link iconBtn>
        <FontAwesomeIcon icon={faAngleLeft} color="#aeb8c4" size="xl" />
      </Button>
      <div className="title-box">
        <h3>Bitcoin Wallet</h3>
      </div>
      <Button onClick={() => MenuToggleBtnClick()} link iconBtn className={`mobile-menu-btn ${open ? 'open' : ''}`}>
        <FontAwesomeIcon icon={open ? faClose : faEllipsisVertical} color={open ? '#ffffff' : '#aeb8c4'} size="xl" />
      </Button>
      {open ?
        <div className="menu-container">
          <nav className="mobile-menu-nav">
            <ul className="mobile-menu-list">
              <li className="mobile-menu-item">Home<FontAwesomeIcon icon={faHome} color="#aeb8c4" size="lg" /></li>
              <li className="mobile-menu-item">Profile<FontAwesomeIcon icon={faUser} color="#aeb8c4" size="lg" /></li>
              <li className="mobile-menu-item">Logout<FontAwesomeIcon icon={faSignOut} color="#aeb8c4" size="lg" /></li>
            </ul>
          </nav>
        </div>
        :
        ''
      }
    </header>
  );
};

export default Header;
