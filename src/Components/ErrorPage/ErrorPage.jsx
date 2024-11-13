
import React from 'react';

function ErrorPage({ error }) {
  return (
    <div style={{ textAlign: 'center', padding: '2em' }}>
      <h1>Oops! Something went wrong.</h1>
      <p>{error?.message || "Unexpected error occurred."}</p>
      <a href="/">Go back to Home</a>
    </div>
  );
}

export default ErrorPage;
