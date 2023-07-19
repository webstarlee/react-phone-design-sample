import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode
  iconBtn?: boolean;
  size?: string;
  link?: boolean;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  children,
  className,
  iconBtn,
  size,
  link,
  fullWidth
}) => {

  let btnClassNames = 'btn'
  btnClassNames += `${iconBtn? ' btn-icon': ''}`
  btnClassNames +=  `${size? ' btn-'+size: ''}`
  btnClassNames += `${className? ' '+className: ''}`
  btnClassNames += `${link? ' btn-link': ''}`
  btnClassNames += `${fullWidth? ' btn-full-width': ''}`

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={btnClassNames}
    >
      {children}
    </button>
  );
};

export default Button;
