import React from 'react';

const ControlPanel = ({ onReset, onGenerate }) => {
  return (
    <div className="control-panel">
      <button onClick={onReset}>Reset</button>
      <button onClick={onGenerate}>Generate New Board</button>
    </div>
  );
};

export default ControlPanel;