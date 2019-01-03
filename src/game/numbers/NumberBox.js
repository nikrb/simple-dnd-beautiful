import React from 'react';

import DraggableItemWrapper from './DraggableItemWrapper';

export default props => {
  const style = {
    display: 'flex', justifyContent: 'center', alignItems: 'center',
    width: '2em', height: '2em', border: "1px solid black"
  };
  return (
    <DraggableItemWrapper draggableId={props.value}
                          index={props.itemPosition}>
      <div style={style}>
        <div>{props.content}</div>
      </div>
    </DraggableItemWrapper>
  )
};
