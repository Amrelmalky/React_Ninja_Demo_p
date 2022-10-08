// {/*Our Custom Hook (This Hook using for fetch some data from given*/}
// Notes : You can use this custom hook over and over for every time we need to fetch a data from server .

import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // inner function or the call back function will be excuted only if Url changed
  useEffect(() => {
    setTimeout(() => {
      // Creates a new AbortController object instance.
      const controller = new AbortController();

      //Grab a reference to its associated AbortSignal object using the
      // (AbortController.signal) property.
      const signal = controller.signal;

      // When the fetch request is initiated, we pass in the AbortSignal as an option inside  the request's options object (the {signal} below).
      // This associates with the signal and controller with the fetch request and allows us to abort it by calling Abort() method

      fetch(url, { signal })
        .then((res) => {
          // handle the fetch error due to access denied or problem in endpoint
          // rcvd data have properity called ok    res.ok = true normal
          // (!res.ok) meaning have error in connection .

          if (!res.ok) {
            // throw the error message if connection faild
            throw Error(" Could not fetch");
          }
          // else res.ok = true
          // get the res.json()= data
          return res.json();
        })

        // update our DOM with the rcvd data
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setIsLoading(false);
            setError(err.message);
          }
          // catch any kind of erros and of course the above error
        });

      // apply clean up function be return function from inner function of useEffect hook
      return () => {
        controller.abort();
      };
    }, 1000);
  }, [url]);

  return { data, isLoading, error };
  
};

export default useFetch;
