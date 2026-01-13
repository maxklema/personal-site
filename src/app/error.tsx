'use client'; 

import { useEffect } from 'react';
import "./globals.css";

export default function Error({
  error
}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error('Blog error:', error);
  }, [error]);

  return (
    <div className="errorPageMainFrame">
        <img src="/error.png" alt="Error" className="errorImg" />
        <h2 className="errorHeading">Sorry, an Internal Server Error Occured</h2>
        <a onClick={() => window.location.reload()} className="hyperLink">Try Again</a>
    </div>
  );
}
