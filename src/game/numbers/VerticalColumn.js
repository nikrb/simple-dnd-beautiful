import React from 'react';

import DroppableWrapper from './DroppableWrapper';
import DraggableListItems from './DraggableListItems';

export default props =>
  <DroppableWrapper droppableId={props.column.id} className="source">
    <DraggableListItems items={props.items} />
  </DroppableWrapper>;
