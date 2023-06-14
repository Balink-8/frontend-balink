import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useApi = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  const makeRequest = async (method, url, data = null) => {
    setLoading(true);

    try {
      const config = {
        method: method,
        url: `http://167.172.66.247:8002${url}`,
        data: data,
      };

      const result = await axios(config);

      setResponse(result.data);
      setError(null);
    } catch (error) {
      console.log(error);
      setError(error);
      setResponse(null);
    } finally {
      setLoading(false);
    }
  };

  const get = (url) => makeRequest("GET", url);
  const post = (url, data) => makeRequest("POST", url, data);
  const put = (url, data) => makeRequest("PUT", url, data);
  const del = (url) => makeRequest("DELETE", url);

  return { response, error, loading, get, post, put, del };
};

export default useApi;
