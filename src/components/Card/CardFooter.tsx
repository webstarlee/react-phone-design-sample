import React from "react";

interface CardFooterProps {
  className?: string;
  children?: React.ReactNode
}

const CardFooter = ({className, children}: CardFooterProps) => {

  return (
    <div className={`card-footer ${className? className: ''}`}>
      {children}
    </div>
  );
};

export default CardFooter;
