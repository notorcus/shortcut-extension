import React, { useState } from 'react';
import RunButton from './components/RunButton';
import TextInput from './components/TextInput';

const App: React.FC = () => {
  const [sequenceName, setSequenceName] = useState('');

  const handleRunClick = () => {
    const csInterface = new CSInterface();
    const script = `alert("Script run successful. Text input: ${sequenceName}")`;
  
    csInterface.evalScript(script, (result: any) => {
      console.log("ExtendScript Result: ", result);
      // Optionally handle feedback from ExtendScript here
    });
  };

  return (
    <div>
      <h1>Premiere Pro Extension</h1>
      <TextInput
        value={sequenceName}
        onChange={setSequenceName}
        placeholder="Enter Sequence Name"
      />
      <RunButton onClick={handleRunClick} />
    </div>
  );
};

export default App;