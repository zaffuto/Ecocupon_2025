import * as Sentry from '@sentry/nextjs';
import { Button } from './ui/button';

export default function SentryTest() {
  const testError = () => {
    try {
      throw new Error('Test Error from ECOBolt');
    } catch (error) {
      Sentry.captureException(error);
    }
  };

  const testPerformance = () => {
    const transaction = Sentry.startTransaction({
      name: 'Test Transaction'
    });

    Sentry.configureScope(scope => {
      scope.setSpan(transaction);
    });

    // Simulamos una operación
    setTimeout(() => {
      transaction.finish();
    }, 2000);
  };

  return (
    <div className="flex gap-4 p-4">
      <Button 
        onClick={testError}
        variant="destructive"
      >
        Test Error
      </Button>
      <Button 
        onClick={testPerformance}
        variant="outline"
      >
        Test Performance
      </Button>
    </div>
  );
}
