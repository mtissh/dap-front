export const Main = ({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <main className={`min-w-[calc(100vh-109px)] pt-[3%] px-0 pb-[15%] md:pt-4 md:pb-20 ${className}`}>{children}</main>;
};