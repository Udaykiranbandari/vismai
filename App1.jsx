import React from 'react';
import './App1.css'; // import the CSS

function App1() {
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.Xyh9XzczjFG4S2KGuS7mBwHaHa&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.Y3Ze4XCjURgADKVMti49VwAAAA&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.jJYND_RzWVlJnjJaR-mmAgHaHa&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.HrLvAtqD6i22W4L1sS06vgHaFj&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.LM68-8RJCWZ2HdPe6J5P_AHaE9&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.Y484f7AzHY0b45zV4uPMawHaEK&pid=Api&P=0&h=220",
    // "https://tse3.mm.bing.net/th?id=OIP.UGh4lmwscs_K7GAFdeig2gHaE8&pid=Api&P=0&h=220",
    // "https://tse3.mm.bing.net/th?id=OIP.GibCytiU24AzTxUA-DtJmAHaFk&pid=Api&P=0&h=220"
  ];

  return (
    <div className="image-grid">
      {images.map((url, index) => (
        <img key={index} src={url} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
}

export default App1;

