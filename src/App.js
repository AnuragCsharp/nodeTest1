import React from 'react';
import './App.css';
import { QRCodeCanvas } from 'qrcode.react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="animated-header">Welcome to Anurag's Page</h1>
      </header>
      <main>
        <div className="qr-container">
          <QRCodeCanvas
            value="https://anuragcsharp.github.io/nodeTest1/"
            className="qr-code"
            bgColor="#ffffff"
            fgColor="#000000"
            level="H"
          />
          <p>Scan the QR code to visit the page!</p>
        </div>
      </main>
    </div>
  );
}

export default App;
