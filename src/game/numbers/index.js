import React from 'react';
import NumbersGameContext from './NumbersGameContext';
import VerticalColumn from './VerticalColumn';

import initialData from '../../data/init.js';

class NumbersGame extends React.Component {
    constructor(props) {
      super(props);
      this.onDragEnd = this.onDragEnd.bind(this);
      this.state = { ...initialData };
    }
    onDragEnd(result) {
      const { destination, source, draggableId } = result;
      if (!destination) { return; }

      const column = this.state.column;
      const numberIds = Array.from(column.numberIds);
      numberIds.splice(source.index, 1);
      numberIds.splice(destination.index, 0, draggableId);
      // const numbers = numberIds.map((numberId) =>
      //   parseInt(this.state.numbers[numberId].content, 10));

      // this.playSound(numbers);
      this.updateState(column, numberIds);
    }
    updateState(column, numberIds) {
      const newColumn = {
        ...column,
        numberIds
      };

      this.setState({
        ...this.state,
        column: newColumn
      });
    }
    // playSound(numbers) {
    //   const sound = isSortedAsc(numbers) ? ClapsSound : MoveSound;
    //   new Audio(sound).play();
    // }
    render() {
      const numbers = this.state.column.numberIds.map(numberId => this.state.numbers[numberId]);
      return (
        <NumbersGameContext onDragEnd={this.onDragEnd}>
          <VerticalColumn column={this.state.column} items={numbers} />
        </NumbersGameContext>
      );
    }
};

export default NumbersGame;
