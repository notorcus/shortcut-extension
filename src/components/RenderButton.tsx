//RenderButton.tsx
import React from 'react';

interface RenderButtonProps {
  onClick: () => void;
}

const RenderButton: React.FC<RenderButtonProps> = ({ onClick }) => {
  return <button onClick={onClick}>Render Item</button>;
};

export default RenderButton;
