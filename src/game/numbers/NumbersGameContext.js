import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

export default props =>
  <div>
    <DragDropContext onDragEnd={props.onDragEnd} {...props} />
  </div>
