import React from "react";

interface TabsProps {
  className?: string;
  children?: React.ReactNode;
}

const Tabs = ({className, children}: TabsProps) => {

  return (
    <div className={`tabs ${className? className: ''}`}>{children}</div>
  );
};

export default Tabs;
