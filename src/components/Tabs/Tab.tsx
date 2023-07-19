import React from "react";
import Button from "../Button";

interface TabProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Tab = ({className, children, onClick}: TabProps) => {

  return (
    <Button className={`tab ${className ? className : ''}`} link onClick={onClick}>{children}</Button>
  );
};

export default Tab;
