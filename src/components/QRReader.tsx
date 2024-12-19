'use client';

import { useEffect, useState, useCallback } from 'react';
import { Html5QrcodeScanner, Html5QrcodeScanType, Html5QrcodeScanner as Scanner } from 'html5-qrcode';

interface QRReaderProps {
  onResult: (result: string) => void;
  onError?: (error: string) => void;
}

const QRReader = ({ onResult, onError }: QRReaderProps) => {
  const [isScanning, setIsScanning] = useState(false);

  const getQrBoxSize = useCallback(() => {
    const isMobile = window.innerWidth < 640;
    const width = isMobile ? window.innerWidth - 50 : 250;
    return { width, height: width };
  }, []);

  useEffect(() => {
    const qrBoxSize = getQrBoxSize();
    const scanner = new Html5QrcodeScanner(
      'reader',
      {
        qrbox: qrBoxSize,
        fps: 10,
        aspectRatio: 1,
        supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_CAMERA],
        experimentalFeatures: {
          useBarCodeDetectorIfSupported: true
        },
        rememberLastUsedCamera: false, // No recordar la última cámara
        showTorchButtonIfSupported: true,
        defaultZoomValueIfSupported: 2,
        showZoomSliderIfSupported: true,
        defaultPermissionRequest: true, // Solicitar permisos automáticamente
        focusMode: 'continuous', // Enfoque continuo
        videoConstraints: {
          facingMode: { exact: "environment" } // Forzar cámara trasera
        }
      },
      false
    );

    const success = (result: string) => {
      setIsScanning(false);
      scanner.clear();
      onResult(result);
    };

    const error = (err: string) => {
      // Ignorar errores específicos
      if (!err.includes('NotFound') && 
          !err.includes('MultiFormat') && 
          !err.includes('NotFoundException')) {
        onError?.('Error al escanear. Intenta de nuevo o usa otro código QR.');
      }
    };

    if (!isScanning) {
      setIsScanning(true);
      scanner.render(success, error);

      // Personalizar textos en español y ocultar selector de cámara
      setTimeout(() => {
        // Ocultar selector de cámara
        const cameraSelect = document.querySelector('#reader__camera_selection');
        if (cameraSelect) {
          (cameraSelect as HTMLElement).style.display = 'none';
        }

        // Traducir textos
        const elements = document.querySelectorAll('#reader__dashboard_section_csr span, #reader__dashboard_section_csr button');
        elements.forEach(el => {
          if (el.textContent?.includes('Request Camera Permissions')) {
            el.textContent = 'Permitir acceso a la cámara';
          }
          if (el.textContent?.includes('Start Scanning')) {
            el.textContent = 'Iniciar Escaneo';
          }
        });

        const swapLink = document.querySelector('#reader__dashboard_section_swaplink');
        if (swapLink) {
          const buttons = swapLink.querySelectorAll('button');
          buttons.forEach(button => {
            if (button.textContent?.includes('File based')) {
              button.textContent = 'Escanear desde archivo';
            }
            if (button.textContent?.includes('Camera based')) {
              button.textContent = 'Usar cámara';
            }
          });
        }
      }, 100);
    }

    const handleResize = () => {
      scanner.clear().then(() => {
        const newSize = getQrBoxSize();
        scanner.render(success, error);
      }).catch(console.error);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scanner.clear().catch(console.error);
    };
  }, [onResult, onError, getQrBoxSize]);

  return (
    <div className="w-full">
      <div id="reader" className="qr-container"></div>
      <style jsx global>{`
        .qr-container {
          width: 100% !important;
          padding: 0 !important;
        }
        #reader {
          border: none !important;
          box-shadow: none !important;
        }
        #reader__scan_region {
          min-height: unset !important;
          background: transparent !important;
          position: relative !important;
        }
        #reader__scan_region > img {
          max-width: 100% !important;
          object-fit: contain !important;
        }
        #reader__scan_region video {
          max-width: 100% !important;
          object-fit: cover !important;
          border-radius: 12px !important;
        }
        #reader__dashboard {
          margin-top: 1rem !important;
          padding: 1rem !important;
          background: #f8fafc !important;
          border-radius: 12px !important;
        }
        #reader__dashboard_section_swaplink {
          text-align: center !important;
        }
        #reader__dashboard_section_csr button {
          background: #16a34a !important;
          color: white !important;
          padding: 0.5rem 1rem !important;
          border-radius: 0.375rem !important;
          border: none !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
        }
        #reader__dashboard_section_csr button:hover {
          background: #15803d !important;
        }
        #reader__camera_selection {
          display: none !important;
        }
        select {
          width: 100% !important;
          max-width: 100% !important;
          padding: 0.5rem !important;
          margin: 0.5rem 0 !important;
          border-radius: 0.375rem !important;
          border: 1px solid #e2e8f0 !important;
          background-color: white !important;
          cursor: pointer !important;
        }
        #reader__filescan_input {
          width: 100% !important;
          padding: 0.5rem !important;
          margin: 0.5rem 0 !important;
          border: 1px dashed #e2e8f0 !important;
          border-radius: 0.375rem !important;
          background-color: #f8fafc !important;
        }
        #reader__dashboard_section_swaplink > div {
          margin: 1rem 0 !important;
        }
        #reader__dashboard_section_swaplink > div > button {
          background: #475569 !important;
          color: white !important;
          padding: 0.5rem 1rem !important;
          border-radius: 0.375rem !important;
          border: none !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: background-color 0.2s !important;
        }
        #reader__dashboard_section_swaplink > div > button:hover {
          background: #334155 !important;
        }
      `}</style>
    </div>
  );
};

export default QRReader;
