import React from "react";
import api from "../Service/api";
import { useState } from "react";

const useApifetch = (urlObject ) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const call = async (payload , type = "") => {
    setResponse(null);
    setError("");
    setLoading(true);
    try {
      let res = await api(urlObject , payload , type);
      setResponse(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { call, response, error, loading };
};

export default useApifetch;
