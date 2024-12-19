import QRCodeForm from '@/components/QRCodeForm';

export default function CreateQRPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <div className="max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Crea tu código QR de cupón</h1>
        <QRCodeForm />
      </div>
    </main>
  );
}
