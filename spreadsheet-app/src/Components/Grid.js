import React, { useState, useEffect } from 'react';
import { Grid as VirtualGrid, AutoSizer } from 'react-virtualized';
import Cell from './Cell';

const Grid = () => {
  const [rows, setRows] = useState(70);
  const cols = 20;

  const loadMoreRows = () => {
    setRows((prevRows) => prevRows + 20); // Load 20 more rows on each scroll
  };

  const isRowLoaded = ({ index }) => {
    return index < rows;
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <VirtualGrid
          cellRenderer={({ columnIndex, key, rowIndex, style }) => {
            const cellId = rowIndex * cols + columnIndex;
            return <Cell key={key} id={cellId} style={style} />;
          }}
          columnCount={cols}
          columnWidth={100}
          height={height}
          rowCount={rows}
          rowHeight={40}
          width={width}
          onScroll={({ clientHeight, scrollHeight, scrollTop }) => {
            if (scrollHeight - scrollTop === clientHeight) {
              loadMoreRows();
            }
          }}
        />
      )}
    </AutoSizer>
  );
};

export default Grid;
