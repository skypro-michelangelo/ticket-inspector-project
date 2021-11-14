import React, { useState } from 'react'
import { OneOffQrScanner } from 'react-webcam-qr-scanner.ts'

function DemoOneOffScanning() {
  const [qrCode, setQrCode] = useState('')
  return (
    <>
      <p>
        QR Code: <code>{qrCode}</code>
      </p>
      {/* auto close the webcam once detected QR code */}
      <OneOffQrScanner
        onQrCode={setQrCode}
        hidden={false} /* optional: set true to hide the video-preview */
      />
    </>
  )
}

export default DemoOneOffScanning