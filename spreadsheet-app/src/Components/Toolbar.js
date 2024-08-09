// FormattingToolbar.js
import React from 'react';
import { useGridStore } from '../Store/UserStore';

const FormattingToolbar = () => {
  const setCellFormatting = useGridStore((state) => state.setCellFormatting);
  const selectedCellId = useGridStore((state) => state.selectedCellId); // Get selected cell ID from the store
  const undo = useGridStore((state) => state.undo);
  const redo = useGridStore((state) => state.redo);
  const setSearchQuery = useGridStore((state) => state.setSearchQuery);

  const applyFormatting = (format) => {
    if (selectedCellId) {
      setCellFormatting(selectedCellId, format);
    } else {
      alert('Please select a cell to apply formatting.');
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <div className="flex space-x-2">
        <button onClick={() => applyFormatting({ textAlign: 'left' })}>Left</button>
        <button onClick={() => applyFormatting({ textAlign: 'center' })}>Center</button>
        <button onClick={() => applyFormatting({ textAlign: 'right' })}>Right</button>
        <button onClick={() => applyFormatting({ fontSize: '12px' })}>Small</button>
        <button onClick={() => applyFormatting({ fontSize: '16px' })}>Medium</button>
        <button onClick={() => applyFormatting({ fontSize: '20px' })}>Large</button>
      </div>
      <div className="flex space-x-2">
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
      </div>
      <input
        type="text"
        placeholder="Search..."
        onChange={handleSearch}
        className="border p-2"
      />
    </div>
  );
};

export default FormattingToolbar;
