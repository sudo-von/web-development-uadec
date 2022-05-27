import React from 'react';

interface ContainerProps {
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around';
  alignItems?: 'start' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  style?: object;
  children: React.ReactNode;
}

const Container = ({
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  style = {},
  children,
}: ContainerProps) => {
  return (
    <div style={{ display: 'flex', justifyContent, alignItems, ...style }}>
      {children}
    </div>
  );
};

export default Container;
