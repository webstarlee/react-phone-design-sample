import React from "react";

interface TabPanelProps {
  className?: string;
  children?: React.ReactNode;
}

const TabPanel = ({className, children}: TabPanelProps) => {

  return (
    <div className={`tab-panel ${className? className: ''}`}>{children}</div>
  );
};

export default TabPanel;
