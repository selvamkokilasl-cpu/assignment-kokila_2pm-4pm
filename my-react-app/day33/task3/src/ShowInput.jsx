import { useState } from 'react';

export default function ShowInput() {
  // State to store input value
  const [text, setText] = useState('');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on typing
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <p style={{ marginTop: '10px', fontSize: '18px', color: '#333' }}>
        You typed: {text}
      </p>
    </div>
  );
}
