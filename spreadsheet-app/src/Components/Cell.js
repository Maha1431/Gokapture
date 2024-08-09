// Cell.js
import React, { useState, useEffect } from 'react';
import { useGridStore } from '../Store/UserStore';

const Cell = ({ id }) => {
  const gridData = useGridStore((state) => state.gridData);
  const cellFormatting = useGridStore((state) => state.cellFormatting);
  const setCellValue = useGridStore((state) => state.setCellValue);
  const setSelectedCellId = useGridStore((state) => state.setSelectedCellId); // Get the setSelectedCellId function from the store
  const searchQuery = useGridStore((state) => state.searchQuery);
  const [value, setValue] = useState(gridData[id] || '');
  const selectedCellId = useGridStore((state) => state.selectedCellId);
  const isSelected = selectedCellId === id;

  useEffect(() => {
    setValue(gridData[id] || '');
  }, [gridData, id]);

  const handleChange = (e) => {
    setValue(e.target.value);
    setCellValue(id, e.target.value);
  };

  const handleSelect = () => {
    setSelectedCellId(id); // Update the selected cell ID in the store
  };

  const isMatch = value.includes(searchQuery);
  const formatting = cellFormatting[id] || {};

  return (
    <input
      className={`border p-2 text-center ${isMatch ? 'bg-yellow-200' : ''} ${isSelected ? 'bg-blue-100' : ''}`}
      style={{ ...formatting }}
      value={value}
      onChange={handleChange}
      onClick={handleSelect}
    />
  );
};

export default Cell;
