import React from "react";

interface TabListProps {
  className?: string;
  children?: React.ReactNode;
}

const TabList = ({className, children}: TabListProps) => {

  return (
    <div className={`tab-list ${className? className: ''}`}>{children}</div>
  );
};

export default TabList;
