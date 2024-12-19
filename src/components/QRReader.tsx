'use client';

import { useEffect, useState } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

interface QRReaderProps {
  onResult: (result: string) => void;
  onError?: (error: string) => void;
}

const QRReader = ({ onResult, onError }: QRReaderProps) => {
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      false
    );

    const success = (result: string) => {
      setIsScanning(false);
      scanner.clear();
      onResult(result);
    };

    const error = (err: string) => {
      if (onError) {
        onError(err);
      }
    };

    if (!isScanning) {
      setIsScanning(true);
      scanner.render(success, error);
    }

    return () => {
      scanner.clear().catch(console.error);
    };
  }, [onResult, onError]);

  return (
    <div className="w-full max-w-md mx-auto">
      <div id="reader" className="w-full"></div>
    </div>
  );
};

export default QRReader;
