import React from "react";
import Card from './Card/Card';
import Classes from "./Column.module.css";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import DescInput from './DescInput/DescInput';

const Column = ({ column, id, onAdCdClick, onDescIpChange, onDIpSubmit, onCdDragOver, onCdDrop, onCdDragStart }) => {
  const name = column.name;
  const cards = column.cards;
  const count = cards.length;
  const cardDescInput = column.cardDescInput;
  return (
    <ul className={Classes.column} id={id} onDragOver={onCdDragOver} onDrop={onCdDrop}>
      <ColumnHeader name={name} count={count} />
      {cards.map((card, index) => 
          <Card 
            key={`${card.description} ${index}`} 
            description={card.description}
            dragging={card.dragging}
            id={index}
            onDragStart={(event) => onCdDragStart(event, index)} />
        )
      }
      {cardDescInput ? <DescInput onChange={onDescIpChange} onSubmit={onDIpSubmit} /> : <button className={Classes.addCardButton} onClick={onAdCdClick}>add card</button>}
    </ul>
  );
};

export default Column;
