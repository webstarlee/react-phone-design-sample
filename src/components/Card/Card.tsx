import React from "react";

interface CardHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({className, children}: CardHeaderProps) => {
  return (
    <div className={`card ${className? className: ''}`}>
      {children}
    </div>
  );
};

export default Card;
