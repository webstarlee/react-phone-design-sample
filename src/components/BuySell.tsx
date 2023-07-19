import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Button from "@/components/Button";

interface BuySellProps {
  onClick: () => void;
  className?: string;
}

const BuySell: React.FC<BuySellProps> = ({ onClick, className }) => {

  return (
    <div className={`buy-sell-btn-container ${className? className: ''}`}>
      <Button onClick={onClick} className="buy-sell-btn">
        <div className="buy-sell-img-box buy-box">
          <FontAwesomeIcon icon={faDollarSign} color="#ffffff" size="xl" />
        </div>
        <span>Buy BTC</span>
      </Button>
      <Button onClick={onClick} className="buy-sell-btn">
        <div className="buy-sell-img-box sell-box">
          <FontAwesomeIcon icon={faDollarSign} color="#ffffff" size="xl" />
        </div>
        <span>Sell BTC</span>
      </Button>
    </div>
  );
};

export default BuySell;
