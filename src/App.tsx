//App.tsx
import React from 'react';
import RenderButton from './components/RenderButton';

const App: React.FC = () => {
  const handleRenderClick = () => {
    const csInterface = new CSInterface();
    csInterface.evalScript(`$.runScript.alertAndSaveSelectedItemInfo()`, (result: any) => {
        console.log(result);
    });
  };

  return (
    <div>
      <h1>Premiere Pro Extension</h1>
      <RenderButton onClick={handleRenderClick} />
    </div>
  );
};

export default App;
