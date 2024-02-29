import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void; // Define an onChange event handler to capture input changes
  placeholder?: string; // Optional placeholder text
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};

export default TextInput;
