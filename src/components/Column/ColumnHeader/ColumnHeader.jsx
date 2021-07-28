import React from 'react';
import Classes from './ColumnHeader.module.css';

const ColumnHeader = ({ name, count }) => {
  return (
    <li className={Classes.header}>
      <span>{name}</span>
      <span className={Classes.count}>{count}</span>
    </li>
  );
};

export default ColumnHeader;