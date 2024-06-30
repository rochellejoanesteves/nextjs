type ButtonProps = {
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      className={`font-bold py-2 px-4 rounded ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
