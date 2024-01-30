type strUnd = string | undefined;

interface ContainerProps {
  children: React.ReactNode;
  className?: strUnd;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-[120rem] px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
