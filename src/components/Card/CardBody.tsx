import React from "react";

interface CardBodyProps {
  className?: string;
  children?: React.ReactNode;
}

const CardBody = ({className, children}: CardBodyProps) => {

  return (
    <div className={`card-body ${className? className: ''}`}>
      {children}
    </div>
  );
};

export default CardBody;
