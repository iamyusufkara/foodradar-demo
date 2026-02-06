import { useRouteError } from 'react-router-dom';

function isError(error: any): error is { statusText: string } {
  return 'statusText' in error;
}

export function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <h1>Entschuldigung, es ist ein Fehler aufgetreten</h1>
      {isError(error) && <p className="text-base text-slate-700">{error.statusText}</p>}
    </div>
  );
}
