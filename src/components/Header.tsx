import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faClose, faEllipsisVertical, faHome, faUser, faSignOut } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button";

const Header: React.FC = () => {
  const [open, isOpen] = React.useState<Boolean>(false)
  const menuRef = React.useRef<HTMLUListElement | null>(null);
  const HandleBtnClick = () => {
    console.log("Rank Math")
  }

  const MenuToggleBtnClick = () => {
    isOpen(!open)
  }

  const handleClickOutsideMenu = (event: Event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.mobile-menu-btn')
    ) {
      isOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', handleClickOutsideMenu);

    return () => {
      document.removeEventListener('click', handleClickOutsideMenu);
    };
  }, []);

  return (
    <>
      <div className={`menu-container ${open? 'open': ''}`}>
        <Button onClick={HandleBtnClick} iconBtn link className="mobile-menu-close-btn">
          <FontAwesomeIcon icon={faClose} color="#aeb8c4" size="xl" />
        </Button>
        <nav ref={menuRef} className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            <li className="mobile-menu-item">Home<FontAwesomeIcon icon={faHome} color="#aeb8c4" size="lg" /></li>
            <li className="mobile-menu-item">Profile<FontAwesomeIcon icon={faUser} color="#aeb8c4" size="lg" /></li>
            <li className="mobile-menu-item">Logout<FontAwesomeIcon icon={faSignOut} color="#aeb8c4" size="lg" /></li>
          </ul>
        </nav>
      </div>
      <header className="header-container">
        <Button onClick={HandleBtnClick} link iconBtn>
          <FontAwesomeIcon icon={faAngleLeft} color="#aeb8c4" size="xl" />
        </Button>
        <div className="title-box">
          <h3>Bitcoin Wallet</h3>
        </div>
        <Button onClick={() => MenuToggleBtnClick()} link iconBtn className='mobile-menu-btn'>
          <FontAwesomeIcon icon={faEllipsisVertical} color='#aeb8c4' size="xl" />
        </Button>
      </header>
    </>
  );
};

export default Header;
