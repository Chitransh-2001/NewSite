'use client';
import { useEffect } from 'react';

export default function useInactivityLogout() {
  useEffect(() => {
    let timeout;

    const reset = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fetch('/api/logout', { method: 'POST' }).then(() => {
          window.location.href = '/login';
        });
      }, 10 * 60 * 1000); // 10 mins
    };

    ['click', 'mousemove', 'keydown', 'scroll'].forEach(event =>
      window.addEventListener(event, reset)
    );

    reset();

    return () => {
      clearTimeout(timeout);
      ['click', 'mousemove', 'keydown', 'scroll'].forEach(event =>
        window.removeEventListener(event, reset)
      );
    };
  }, []);
}
