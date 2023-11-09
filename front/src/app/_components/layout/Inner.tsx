import React from 'react';

export const Inner = ({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`m-auto px-[5%] w-auto md:px-5 md:w-8/12 ${className}`}>{children}</div>;
};