import React, { useState } from 'react';
import RunButton from './components/RunButton';
import TextInput from './components/TextInput';

const App: React.FC = () => {
  const [sequenceName, setSequenceName] = useState(''); // State to hold the input value

  const handleRunClick = () => {
    console.log('Run button clicked with sequence name:', sequenceName);
    // Use sequenceName here as needed
  };

  return (
    <div>
      <h1>Hello, Premiere Pro Extension!</h1>
      <p>Welcome to your React app with TypeScript.</p>
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