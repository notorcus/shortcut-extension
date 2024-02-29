import React from 'react';

interface RunButtonProps {
  onClick: () => void;
}

const RunButton: React.FC<RunButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick}>Run</button>
  );
};

export default RunButton;
