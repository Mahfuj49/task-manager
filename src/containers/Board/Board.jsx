import React, { Component } from "react";
import Column from "../../components/Column/Column";
import NameInput from "../../components/NameInput/NameInput";
import Classes from "./Board.module.css";

export default class Board extends Component {
  state = {
    columns: [],
    // column name input field active status
    colNameInput: false,
    // column name value
    colName: null,
    // dragged card index
    dragged: null,
    // column index, card been dragged
    container: null,
  };

  // handle new column button click
  handleColClick = () => {
    this.setState({
      colName: null,
      colNameInput: true,
    });
  };

  // handle new column name input submit
  handleNIpSubmit = (event) => {
    event.preventDefault();

    // get the name of newly added column object
    const name = this.state.colName;

    const columns = [...this.state.columns];

    // if the name is null, it means the user don't want to add new column so remove the newly created column object
    if (name !== null && name.length > 0) {
      // column object structure
      const column = {
        name: name,
        cards: [],
        // card desc input field active status
        cardDescInput: false,

        // card description value
        cardDesc: null,
      };
      columns.push(column);
      this.setState({
        columns: columns,
        colNameInput: false,
      });
    }
  };

  // handle new column name input change
  handleNIpChange = (event) => {
    const name = event.target.value;

    this.setState({
      colName: name,
    });
  };

  // handle add card button click
  handleAdCdClick = (i) => {
    const columns = [...this.state.columns];
    columns[i].cardDescInput = true;
    this.setState({
      columns: columns,
    });
  };

  // handle new card description input change
  handleDscIpChange = (event, i) => {
    const description = event.target.value;
    const columns = [...this.state.columns];
    columns[i].cardDesc = description;
    this.setState({
      columns: columns,
    });
  };

  // handle new card description input submit
  handleDIpSubmit = (event, i) => {
    event.preventDefault();
    const columns = [...this.state.columns];
    const column = columns[i];
    const description = column.cardDesc;
    if (description !== null && description.length > 0) {
      const card = {
        description: description,
        dragging: false,
      };
      column.cards.push(card);
      // after submit make the card description to null
      column.cardDesc = null;
      // after submit turn off the input field
      column.cardDescInput = false;
      this.setState({
        columns: columns,
      });
    }
    else {
      column.cardDescInput = false;
      this.setState({
        columns: columns,
      });
    }
  };

  // handle card drag over on column
  handleCdDragOver = (event) => {
    event.preventDefault();
  }

  // handle card enters on drop target
  handleCdDrop = (columnIndex) => {
    let columns = [...this.state.columns];
    // card's drop target container
    let endContainer = [...this.state.columns[columnIndex].cards];
    // card's previous container index
    const prvContainerIn = this.state.container;
    // card's previous container
    let prvContainer = [...this.state.columns[prvContainerIn].cards];
    // dragging card's index in previous container
    const dragged = this.state.dragged;
    const card = prvContainer[dragged];
    card.dragging = false;
    if(columnIndex !== prvContainerIn) prvContainer.splice(dragged, 1);
    endContainer = [...endContainer, card];
    columns[columnIndex].cards = endContainer;
    columns[prvContainerIn].cards = prvContainer;
    this.setState({
      columns: columns,
      dragged: null,
      container: null,
    });
  }

  // handle card drag start
  handleCdDragStart = (event) => {
    const columns = [...this.state.columns];
    const dragged = parseInt(event.target.id);
    const container = parseInt(event.target.parentNode.id);
    columns[container].cards[dragged].dragging = true;
    this.setState({
      columns: columns,
      dragged: dragged,
      container: container,
    });
  }

  render() {
    const colNameInput = this.state.colNameInput;
    const columns = this.state.columns;
    return (
      <div className={Classes.board}>
        {columns.map((column, index) => (
          <Column
            key={`${column.name}${index}`}
            id={index}
            column={column}
            onDescIpChange={(event) => this.handleDscIpChange(event, index)}
            onAdCdClick={() => this.handleAdCdClick(index)}
            onDIpSubmit={(event) => this.handleDIpSubmit(event, index)}
            onCdDragOver={this.handleCdDragOver}
            onCdDrop={() => this.handleCdDrop(index)}
            onCdDragStart={this.handleCdDragStart}
          />
        ))}
        {colNameInput ? (<NameInput onSubmit={this.handleNIpSubmit} onChange={this.handleNIpChange} />)
          : (<button className={Classes.addColumnButton} onClick={this.handleColClick}> new column </button>)}
      </div>
    );
  }
}
