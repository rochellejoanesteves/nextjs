
type TitleProps = {
    level: 1 | 2 | 3 | 4 | 5 | 6;
    className?: string;   
    children: React.ReactNode;        
  };
  
  const Title: React.FC<TitleProps> = ({ level, className, children }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
    return (
      <HeadingTag className={`font-bold ${className}`}>
        {children}
      </HeadingTag>
    );
  };
  
  export default Title;