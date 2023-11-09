import React from 'react';

export const AuthTemplate = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`m-auto pt-[7%] pb-[5%] px-0 md:w-[630px] md:pt-[60px] md:pb-[20px] ${className ?? ''}`}>
    {children}
  </div>
);