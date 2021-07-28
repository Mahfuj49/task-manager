import React from "react";
import Card from './Card/Card';
import Classes from "./Column.module.css";
import ColumnHeader from "./ColumnHeader/ColumnHeader";
import DescInput from './DescInput/DescInput';

const Column = ({ name, count, cards, cardDescInput, onAdCdClick, onDescIpChange, onDIpSubmit }) => {
  return (
    <ul className={Classes.column}>
      <ColumnHeader name={name} count={count} />
      {cards.map(card => <Card key={`${card.description}${Math.random()}`} description={card.description} />)}
      {cardDescInput ? <DescInput onChange={onDescIpChange} onSubmit={onDIpSubmit} /> : <button className={Classes.addCardButton} onClick={onAdCdClick}>add card</button>}
    </ul>
  );
};

export default Column;
