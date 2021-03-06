import React from 'react';

interface ContainerProps {
  flexDirection?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-evenly'
    | 'space-around';
  alignItems?: 'start' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  style?: object;
  children: React.ReactNode;
}

const Container = ({
  flexDirection = 'row',
  justifyContent = 'flex-start',
  alignItems = 'flex-start',
  style = {},
  children,
}: ContainerProps) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection,
        justifyContent,
        alignItems,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
