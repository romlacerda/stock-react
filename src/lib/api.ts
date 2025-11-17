const BASE_URL = `https://www.${import.meta.env.VITE_ALPHA_VANTAGE_API_URL}`;

export const api = {
  get: async (url: string, config?: { params?: Record<string, string> }) => {
    const searchParams = new URLSearchParams(config?.params);
    
    const fullUrl = `${BASE_URL}${url}${searchParams.toString() ? `?${searchParams.toString()}` : ''}`;
    
    const response = await fetch(fullUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return {
      data: await response.json(),
    };
  },
};

