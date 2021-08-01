import React from 'react';
import Classes from './Card.module.css';

const Card = ({ description, onDragStart, dragging, id }) => {
  return (
    <li className={[Classes.card, dragging && Classes.dragging].join(" ")} id={id} draggable={true} onDragStart={onDragStart}>{description}</li>
  );
};

export default Card;