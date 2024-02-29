//App.tsx
import React, { useState } from 'react';
import RunButton from './components/RunButton';
import TextInput from './components/TextInput';

const App: React.FC = () => {
  const [sequenceName, setSequenceName] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSequenceName(event.target.value);
  };

  const handleCheckSequenceClick = () => {
    const csInterface = new CSInterface();
    
    console.log("Sequence Name to check: ", sequenceName);
    const script = `$.runScript.checkSequenceExists("${sequenceName}")`;
  
    csInterface.evalScript(script, (result: any) => {
      console.log("ExtendScript Result: ", result);
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
      <RunButton onClick={handleCheckSequenceClick} />
    </div>
  );
};

export default App;