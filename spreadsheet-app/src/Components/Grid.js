import React from 'react';
import Cell from './Cell';
import { useGridStore } from '../Store/UserStore';

const Grid = () => {
  const gridData = useGridStore((state) => state.gridData);
  const searchQuery = useGridStore((state) => state.searchQuery);
  const rows = 50;
  const cols = 20;

  const filteredCells = Object.keys(gridData).filter((key) =>
    gridData[key].includes(searchQuery)
  );

  return (
    <div className="grid grid-cols-20 gap-0.5">
      {searchQuery
        ? filteredCells.map((key) => <Cell key={key} id={key} />)
        : [...Array(rows * cols)].map((_, idx) => (
            <Cell key={idx} id={idx} />
          ))}
    </div>
  );
};

export default Grid;