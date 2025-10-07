import { useState, useEffect } from 'react';

export const useAnalyticsData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('access_token');

      if (!token) {
        setLoading(false);
        setError(new Error("Authentication token not found."));
        return;
      }
      
      try {
        setLoading(true);
        // This URL MUST be the full path to your backend
        const response = await fetch('http://localhost:5000/auth/analytics', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};