import React from 'react';
import Classes from './Card.module.css';

const Card = ({ description }) => {
  return (
    <li className={Classes.card}>{description}</li>
  );
};

export default Card;