import React from 'react';

interface ControlPanelProps {
  onReset: () => void;
  onGenerate: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onReset, onGenerate }) => {
  return (
    <div className="control-panel">
      <button onClick={onReset}>Reset</button>
      <button onClick={onGenerate}>Generate New Board</button>
    </div>
  );
};

export default ControlPanel;