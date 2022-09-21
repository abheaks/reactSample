import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = async () => {
    console.log("Inside send request");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        header: requestConfig.header ? requestConfig.header : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      console.log("fetch done");
      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
      console.log(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };
  console.log(error);
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
