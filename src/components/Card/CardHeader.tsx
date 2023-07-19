import React from "react";

interface CardHeaderProps {
  className?: string;
  children?: React.ReactNode;
}

const CardHeader = ({className, children}: CardHeaderProps) => {

  return (
    <div className={`card-header ${className? className: ''}`}>
      {children}
    </div>
  );
};

export default CardHeader;
